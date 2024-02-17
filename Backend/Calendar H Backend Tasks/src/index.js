import express from "express";
import authRouter from "./routes/auth.routes.js";
import mongoDB from './db/mongodb.js'
import verifyToken from "./middleware/verifyToken.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.static("../../Frontend/Calendar H Frontend Task1"));
app.use(express.json());
mongoDB();

app.get("/", (req, res) => {
  res.send("/Frontend/Calendar H Frontend Task1/index.html");
});

app.use("/api/auth", authRouter);

app.get("/api/profile", verifyToken, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
