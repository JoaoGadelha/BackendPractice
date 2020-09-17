const express = require('express');
const router = express.Router();
const Post = require('../models/todoListModels')
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname});
    console.log(req.url);
})


router.post('/', async (req, res) => {
    console.log('new post');
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json("Posting completed.");
    } catch(err) {
        res.send({message:err});
    }
})

module.exports = router;