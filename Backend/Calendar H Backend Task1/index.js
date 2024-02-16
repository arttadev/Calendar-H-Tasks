import express from "express";

import mongoDB from "./db/mongodb.js";

import authRouter from "./routes/auth.routes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.static("../../Frontend/Calendar H Frontend Task1"));
app.use(express.json());
mongoDB();

app.get("/", (req, res) => {
  res.send("/Frontend/Calendar H Frontend Task1/index.html");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
