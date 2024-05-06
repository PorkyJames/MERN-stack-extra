import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// const cors = require("cors");
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js"


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

//! Cookie Parser is a middleware that parses HTTP request cookies and make them available in a more accessible format. 
app.use(cookieParser());

app.use(express.json());


//! Routes
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Climbr")
})

app.use('/', authRoute);

