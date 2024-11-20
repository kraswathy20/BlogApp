const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const Post = require('../models/Post')
// UPDATE

router.put('/:id',async (req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updatedUser =await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true})
            res.status(200).json(updatedUser)
        }catch(err){
            console.error("Error", err)
            res.status(500).json({message:"Internal Server Error", error : err})
        }
        

    }else{
        res.send(401).json("You can update only your account!!")
    }
})
    
// DELETE
router.delete('/:id',async (req,res)=>{
    if(req.body.userId === req.params.id){
        try{ 
            const user = await User.findById(req.params.id)
            try{
                Post.deleteMany({username : user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted!")
            }catch(err){
                console.error("Error", err)
                res.status(500).json({message:"Internal Server Error", error : err})
            }
        }
        catch(err){
            console.error("Error:", err)
            res.status(404).json("Usernot found!!")
        }

    }else{
        res.send(401).json("You can delete only your account!!")
    }
})

// GET USER

router.get('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        console.error("Error:", err);
        res.status(404).json("User not found!");
    }
})




module.exports = router