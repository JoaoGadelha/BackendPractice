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
        type: String
    },
    image: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('Posts', PostSchema);