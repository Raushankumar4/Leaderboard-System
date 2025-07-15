import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server in running on http://localhost:${PORT}`);
  });
});

app.get("/", (_, res) => {
  res.send("Server is Running");
});
