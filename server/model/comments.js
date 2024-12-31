const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;