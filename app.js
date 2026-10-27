import express from "express";
const app = express();
export default app;

import morgan from "morgan";

app.use(morgan("dev"));

app.use(express.json());

import foldersRouter from "#api/folders";
app.use("/folders", foldersRouter);

import filesRouter from "#api/files";
app.use("files", filesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
