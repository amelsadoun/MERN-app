import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import postsRouter from "./routes/posts.js";

const app = express();

// const port = process.env.PORT || 3000; this doesn't work??
const port = 5000;

// body parser middleware, needs to be before routes else the code gets fucked
app.use(json({ limit: "30mb", extended: true }));
app.use(urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


//setting up the mongoose thingy
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(port, (req, res) => {
      console.log("listening on port " + port);
    })
  )
  .catch((err) => console.log(err.message));

//Routes
app.use("/api/posts", postsRouter);

//error handler (must be under routes)
// app.use(notFound);
// app.use(errorHandler);
