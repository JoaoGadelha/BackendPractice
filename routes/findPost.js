let express = require('express');
let findPost = express.Router();
let Post = require('../Post');
// Declare variables;
let title, oldPrice, price, image;

findPost.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

findPost.get('/:type', async (req, res) => {
    try {
        const posts = await Post.find({type:req.params.type});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = findPost;