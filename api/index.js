const express = require("express");
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((e) => console.log(e))

app.use('/api/auth',authRouter)
app.use('/api/users', userRouter)

app.listen('3000', () =>{
    console.log("Listening at port 3000")
})