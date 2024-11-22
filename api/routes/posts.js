const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Post = require('../models/Post')

// CREATE POST

router.post('/', async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        console.error("Error:", err);
        res.status(500).json({message: "Internal Server Error", error : err});
    }
})
    
// UPDATE POST
// router.put('/:id',async(req,res)=>{
//     try{
//         const post = await Post.findById(req.params.id)
//         if(post.username === req.body.username){
//             try{
//                 const updatedPost =await Post.findByIdAndUpdate(req.params.id,{
//                     $set : req.body
//                 },{new : true})
//                 res.status(200).json(updatedPost)
//             }catch(err){
//                 res.status(500).json({message : "Internal Server Error", error : err})
//             }
//         }else{
//             res.status(401).json("You can only update your post!!")
//         }
//     }catch(err){
//         console.error("Error:", err);
//         res.status(500).json(err)
//     }
// })

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found!" });
        }
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json({ message: "Internal Server Error", error: err });
            }
        } else {
            res.status(401).json({ message: "You can only update your own post!" });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal Server Error", error: err });
    }
});


// DELETE POST

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found!" });
        }
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(
                    req.params.id
                );
                res.status(200).json("Your Post has been deleted...");
            } catch (err) {
                res.status(500).json({ message: "Internal Server Error", error: err });
            }
        } else {
            res.status(401).json({ message: "You can only delete your own post!" });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal Server Error", error: err });
    }
});

// GET POST

router.get('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post) {
        res.status(404).json("Post unavailable!")
        }
        res.status(200).json(post)
    }catch(err){
        console.error("Error:", err)
        res.status(500).json(err)
    }
})

// GET ALL POST

router.get('/',async(req,res)=>{
    const username = req.query.user
    const catName = req.query.cat
    try{
        let post;
        if(username){
            post = await Post.find({username})
        }else if(catName){
            psot = await Post.find({
                categories:{
                    $in: [catname]
                },  
            })
        }else {
            post =await Post.find()
        }
       res.status(200).json(post)
        
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router