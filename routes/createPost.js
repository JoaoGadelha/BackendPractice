let express = require('express');
let createPost = express.Router();
let Post = require('../Post');
// Declare variables;
let post, savedPost;


// mounts image array from the images submitted by the client side.
// Each image is submitted in a new input field dinamically
// created in the user interface. Each image comes with a
// query name, such as 'image1', 'image2' and so forth. 
/* let imgArray = [];
let imgCounter = 1;
const countImages = (req) => {
    let varObj = {var1:req.query.image1};
    imageName = 'image' + imgCounter;
    //varObj[imageName] = imageName;
    console.log(varObj['var1']);
    while(req.query.imageName !== undefined) {
        console.log('hello');
        imgArray.push(req.query.imageName);
        imgCounter += 1;
        imageName = 'image' + imgCounter;
    }
    console.log(imgArray);
} */


createPost.get('/', async (req, res) => {
    let imgArray = [req.query.image1];
    if(req.query.image2 !== undefined && req.query.image2 !== '') imgArray.push(req.query.image2);
    if(req.query.image3 !== undefined && req.query.image3 !== '') imgArray.push(req.query.image3);
    
     post = new Post({
        title: req.query.title,
        price: req.query.price,
        oldPrice: req.query.oldPrice,
        image: imgArray,
        type: req.query.type
    });
     try {
        savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    } 
})

module.exports = createPost;