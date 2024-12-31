const jwt = require("jsonwebtoken");

const isLogin = (req, res, next) => {
    const token = req.cookies?.token; 

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, token missing" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user info to the request
        next(); // Move to the next middleware or controller
    } catch (err) {
        console.error(err);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = isLogin;
