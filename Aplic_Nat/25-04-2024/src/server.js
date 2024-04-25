import express from "express";
import { config } from "dotenv";
config({ path: 'src/.env' });

const app = express();

app.get("/", (_, res) => {
  res.status(200).send({ message: "Server is running" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});