const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profile_img: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{
    timestamps: true
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.verifyPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Error verifying password');
    }
};

const User = mongoose.model("User", userSchema);
module.exports = User;

