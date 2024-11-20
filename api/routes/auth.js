const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')

// REGISTER

router.post('/register', async(req,res)=>{
    const {username,email,password} = req.body
    try{
       const  salt = await bcrypt.genSaltSync(10);
       const hash = await bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            email,
            password : hash
        })
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        console.error("Error:", err); // Logs the error in the console
        res.status(500).json({ message: "Internal Server Error", error: err.message })
    }
})

// LOGIN

router.post('/login',async(req,res)=>{
    const {username} = req.body
    try{
        const user = await User.findOne({username : username});
        !user && res.status(400).json("Wrong Credentials!!")

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials!!")
        
        const {password, ...others} = user._doc
        res.status(200).json(others)

    }catch(err){
        console.error("Error :", err);
        res.status(500).json({message : "Internal Server Error ", error : err.message})
    }
})

module.exports = router