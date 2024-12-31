const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connection = require("./connection");
const authRoutes = require('./routes/user');
const commentRoutes = require('./routes/comments');
const blogsRoute = require('./routes/blogs');
const singleBlogRoute = require('./routes/singleBlog')
const port = process.env.PORT;


require('dotenv').config();

app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/blog', blogsRoute);
app.use('/api/comments', commentRoutes);
app.use('/api/public', singleBlogRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});