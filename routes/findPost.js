let express = require('express');
let findPost = express.Router();
let Post = require('../Post');

findPost.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

findPost.get('/id/:id', async (req, res) => {
    try {
        const posts = await Post.find({_id:req.params.id});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

findPost.get('/title/:title', async (req, res) => {
    try {
        const posts = await Post.find({title: { $regex : new RegExp(req.params.title, "i")}});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})


findPost.get('/oldPrice/:oldPrice', async (req, res) => {
    try {
        const posts = await Post.find({oldPrice:{$regex: req.params.oldPrice}});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})


findPost.get('/price/:price', async (req, res) => {
    try {
        const posts = await Post.find({price:{$regex: req.params.price}});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

findPost.get('/type/:type', async (req, res) => {
    try {
        const posts = await Post.find({type:req.params.type});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = findPost;