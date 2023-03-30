const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../database/models/userModel');

const authProtect = asyncHandler(async(req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    // Check token
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }

    try{
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Get user from the token without including password
        req.user = await User.findById(decoded.id).select('-password')
        next();
    }catch(err){
        res.status(401)
        throw new Error("Not authorized")
    }
})

module.exports = authProtect