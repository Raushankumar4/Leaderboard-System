import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import historyRoutes from "./routes/history.routes.js";

dotenv.config();

const app = express();

const options = {
  origin: process.env.CLIENT,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(options));
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Server is Running");
});

app.use("/api/users", userRoutes);
app.use("/api/history", historyRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
app.get("/", (_, res) => {
  res.send("Server is Running");
});
