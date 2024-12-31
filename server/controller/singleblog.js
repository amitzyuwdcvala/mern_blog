const Blog = require("../model/blog");
const Comment = require("../model/comments");

const GetSingleComment = async (req, res) => {
    try {
        const blogId = req.params.id; // ID of the blog
        console.log("Blog ID:", blogId);

        // Find the blog by ID and populate its comments
        const FindPost = await Blog.findById(blogId).populate({
            path: 'comments',
            populate: {
                path: 'userId', 
                select: 'username email' 
            }
        });

        console.log("Found Blog:", FindPost);

        if (!FindPost) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ success: true, Post: FindPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    GetSingleComment
};
