const express = require("express");
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((e) => console.log(e))

app.listen('3000', () =>{
    console.log("Listening at port 3000")
})