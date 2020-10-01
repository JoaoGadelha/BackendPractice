let express = require('express');
let updatePost = express.Router();
let Post = require('../Post');

updatePost.get('/:id', async (req, res) => {
    try {
        let title = req.query.title;
        let price = req.query.price;
        let oldPrice = req.query.oldPrice;
        let image = req.query.image;
        let type = req.query.type;
        let updatePost;
        if(title !== '') {
            updatePost = await Post.updateOne({_id: req.params.id},{$set: {title:title}});
        }
        if(price !== '') {
            updatePost = await Post.updateOne({_id: req.params.id},{$set: {price:price}});
        }
        if(oldPrice !== '') {
            updatePost = await Post.updateOne({_id: req.params.id},{$set: {oldPrice:oldPrice}});
        }
        if(image !== '') {
            updatePost = await Post.updateOne({_id: req.params.id},{$set: {image:image}});
        }
        if(type !== '') {
            updatePost = await Post.updateOne({_id: req.params.id},{$set: {type:type}});
        }
        console.log(title,price,oldPrice,image,type);
        const post = await Post.find({_id:req.params.id});
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = updatePost;