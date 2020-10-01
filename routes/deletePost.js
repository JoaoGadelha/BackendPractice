let express = require('express');
let deletePost = express.Router();
let Post = require('../Post');

deletePost.get('/:id', async (req, res) => {
    try {
        console.log(req.query.id);
        const posts = await Post.deleteOne({ _id: req.params.id});
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = deletePost;