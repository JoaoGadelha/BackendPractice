const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.DB_PORT || 4000;
let path = require('path');
let resolvedPath = path.resolve('./index.html');
let mongoose = require('mongoose');
let cors = require('cors');
const Post = require('./Post');
let mongo = require('mongodb');
 
app.use(cors());

/* mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},(err, db) => {
    
    console.log('Connected to DB!');
}) */

mongo.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},(err,db)=> {
    console.log('MONGO: connected to DB');
    console.log(db);
})
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/posts', async (req, res) => {
    try{
        console.log(Post);
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err});
    }
})

app.post('/posts', (req, res) => {
    res.send('POST posts');
})

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});