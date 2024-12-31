const express = require("express");
const router = express.Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const upload = require('../middleware/multer');
const { registerUser, loginUser, logoutUser } = require('../controller/user');

require('dotenv').config();

router.post("/register", upload.single('profile_img'), registerUser);

router.post("/login", upload.none(), loginUser);

router.post('/logout', logoutUser);

module.exports = router;

