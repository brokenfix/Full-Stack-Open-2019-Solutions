
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
});

blogSchema.set('toJSON', {
    transform:(document, toReturn) =>{
        toReturn.id = document._id.toString();
        delete toReturn.__v;
        delete toReturn._id;
    }
});

module.exports = mongoose.model('Blog', blogSchema);