const express = require("express");
const { createBlog, deleteBlog, getBlogs, getBlog } = require('../controller/blogs');
const upload = require('../middleware/multer');
const checkAuth = require('../middleware/checkAuth');

const blogsRoute = express.Router();

blogsRoute.post('/create', upload.single('blog_img'), checkAuth, createBlog);

blogsRoute.delete('/delete/:id', deleteBlog);

blogsRoute.get('/', getBlogs);

module.exports = blogsRoute;