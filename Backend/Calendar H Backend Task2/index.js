import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";

let data = [];

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new passportLocal.Strategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = data.find((user) => user.email === email);
      if (user === undefined) {
        return done(null, null, { message: "Incorrect email" });
      }
      if (await bcrypt.compare(password, user.hashPwd)) {
        return done(null, user);
      }
      done(null, null, { message: "Incorrect password!" });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = data.find((user) => user.id === id);
  done(null, user);
});

app.get("/register", checkNotAuthentication, (req, res) => {
  res.sendFile(path.resolve("views/register.html"));
});

app.get("/login", checkNotAuthentication, (req, res) => {
  res.sendFile(path.resolve("views/login.html"));
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/", checkAuthentication, (req, res) => {
  res.send("Get");
});

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated() === false) {
    return res.redirect("/login");
  }
  next();
}

function checkNotAuthentication(req, res, next) {
    if (req.isAuthenticated() === true) {
      return res.redirect("/");
    }
    next();
  }

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashPwd = await bcrypt.hash(password, 10);
  data.push({
    id: `${Date.now()}_${Math.random()}`,
    name,
    email,
    hashPwd,
  });
  res.redirect("/login");
});

app.listen(process.env.PORT);
