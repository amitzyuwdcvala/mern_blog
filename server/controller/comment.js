const Comment = require("../model/comments");
const Blog = require("../model/blog");

const AddComment = async (req, res) => {
    try {

        const { blogId, userId, comment } = req.body;
        const newComment = new Comment({
            blogId,
            userId,
            comment
        });

        await newComment.save();

        const existBlog = await Blog.findById(blogId);


        if (!existBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        //pushing the comment into the comments array 
        existBlog.comments.push(newComment._id);
        await existBlog.save();
        res.status(201).json({ success: true, message: "Comment added successfully", comment: newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: true, message: "Internal server error" });
    }
};

module.exports = {
    AddComment
};