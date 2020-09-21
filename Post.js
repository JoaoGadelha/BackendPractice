const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
     title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    oldPrice: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('Posts', PostSchema);