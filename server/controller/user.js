const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await user.verifyPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 1 * 24 * 60 * 1000
        })

        res.status(201).json({ success: true, token, message: "Login successful", user: user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

 const registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        const imagePath = req.file.filename
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({
            email,
            username,
            password, 
            profile_img: imagePath
        })
        console.log(user);
        const savedUser = await user.save();
        res.status(201).json({
            message: "User registered successfully",
            userId: savedUser._id,
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

const logoutUser = async (req, res) => {
    try{
        res.clearCookie('token');
        res.status(200).json({success: true, message: "Logout successful"});
    }catch(err){
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};