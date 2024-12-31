const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    blog_img: {
        type: String,
    },
    author: {
        type: String,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"  
    }]
}, {
    timestamps: true
}); 

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;