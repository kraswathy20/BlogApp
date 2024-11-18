const express = require('express');
const router = express.Router();
const User = require('../models/User')

// REGISTER

router.post('/register', async(req,res)=>{
    try{
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        console.error("Error:", err); // Logs the error in the console
        res.status(500).json({ message: "Internal Server Error", error: err.message })
    }
})


module.exports = router