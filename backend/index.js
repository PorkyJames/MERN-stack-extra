import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// const cors = require("cors");
import cors from "cors"
import dotenv from "dotenv";


const app = express();
// require("dotenv").config()
dotenv.config();

mongoose
.connect(mongoDBURL, {
    //! MongoDB uses an older version of URL Parser / topology engine. Setting these to true helps implement new engines to the DB
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`App listening to port: ${ PORT }`)
    })
})
.catch((error) => {
    console.log(error)
})

app.use(
    cors({
        origin: ["http://localhost:5555"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());


//! Routes
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Climbr")
})


