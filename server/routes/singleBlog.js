const express = require("express");

const singleCommentRoutes = express.Router();
const {GetSingleComment} = require('../controller/singleblog');

singleCommentRoutes.get('/singleblog/:id', GetSingleComment);


module.exports = singleCommentRoutes;