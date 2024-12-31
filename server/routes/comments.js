const express = require("express");
const { AddComment } = require('../controller/comment');
const isLogin = require('../middleware/checkAuth');
const commentRoutes = express.Router();


commentRoutes.post('/addcomment', isLogin, AddComment);


module.exports = commentRoutes;