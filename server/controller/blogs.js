const Blog = require('../model/blog');
const fs = require('fs');
const path = require('path');

const createBlog = async (req, res) => {
    try{        
        const { title, content, author } = req.body;

        const blog_img = req.file.filename;
        const newBlog = new Blog({
            title,
            content,
            blog_img,
            author
        });

        const savedBlog = await newBlog.save();


        res.status(201).json({
            message: "Blog created successfully",
            blogId: savedBlog._id, 
            savedBlog
        });

    }catch(err){
        res.status(500).json({message: "Internal server error"});
    }
}

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if(blog.blog_img){
            const blogImgPath = path.join(__dirname, '../public/images', blog.blog_img); 
            fs.promises.unlink(blogImgPath).then(() => {
                console.log('Blog image deleted successfully');
            }).catch((err) => {
                console.error(err);
            });
        }

        await Blog.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    createBlog,
    getBlogs,
    deleteBlog,
};