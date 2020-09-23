let express = require('express');
let createPost = express.Router();
let Post = require('../Post');
// Declare variables;
let post, savedPost;

createPost.get('/', async (req, res) => {
     post = new Post({
        title: req.query.title,
        price: req.query.price,
        oldPrice: req.query.oldPrice,
        image: ['https://i.ibb.co/VMn8mG7/img12.jpg', 'https://i.ibb.co/VMn8mG7/img12.jpg'],
        type: req.query.type
    });
     try {
        savedPost = await post.save();
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    } 
})

module.exports = createPost;