const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.DB_PORT || 4000;
let path = require('path');
let resolvedPath = path.resolve('./index.html');
let mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./Post');
app.use(cors());
app.use('/.netlify/functions/index',router);

 mongoose.connect('mongodb+srv://joaoricardotg:Crataeva11@cluster0.mxdus.mongodb.net/joaoricardotg?retryWrites=true&w=majority;', {useNewUrlParser: true, useUnifiedTopology: true},(err, db) => { 
    console.log('Connected to DB!');
}) 
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


router.get('/', (req,res) => {
    res.send('Home Page');
})

router.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
        console.log(res.body);
    } catch (err) {
        res.json({ message: err});
    }
})

router.post('/posts', (req, res) => {
    res.send('POST posts');
})

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});

module.exports.handler = serverless(app);