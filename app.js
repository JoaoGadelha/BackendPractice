const express = require("express")
const app = express()
require('dotenv').config();
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./Post');
let cors = require('cors');
let createPost = require('./routes/createPost');
let findPost = require('./routes/findPost');
let updatePost = require('./routes/updatePost');
let deletePost = require('./routes/deletePost');

// middlewares
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/create', createPost);
app.use('/find', findPost);
app.use('/update', updatePost);
app.use('/delete',deletePost);

// database 
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  }, () => { console.log('Connected to DB.') });
/* 
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Home Page : POST');
})

app.get("/", async function (req, res) {
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log(res.body);
    } catch (err) {
        res.json({ message: err });
    }
}) */

// start the server listening for requests
app.listen((process.env.PORT || 3000),
    () => console.log("Server is running in port " + (process.env.PORT || 3000)));