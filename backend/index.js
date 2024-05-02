import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

//! Routes
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Climbr")
} )

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App listening to port: ${ PORT }`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


