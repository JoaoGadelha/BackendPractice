// create an express app
const express = require("express")
const app = express()
let mongoose = require('mongoose');
const Post = require('./Post');
let cors = require('cors');
// use the express-static middleware
app.use(cors());
app.use(express.static("public"))

// define the first route
app.get("/posts", async function  (req, res) {
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log(res.body);
    } catch (err) {
        res.json({ message: err });
    }
})


mongoose.connect('mongodb+srv://joaoricardotg:Crataeva11@cluster0.mxdus.mongodb.net/joaoricardotg?retryWrites=true&w=majority;', { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    console.log('Connected to DB!');
})


// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));