const asyncHandler = require('express-async-handler');
const User = require('../database/models/userModel');
const { hashPassword, comparePassword, generateTOken } = require('../utils/helpers')

// @desc Register new user
// @route POST /api/v1/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    // Check if user exist
    const userExist = await User.findOne({ email })
    if(userExist){
        res.status(400)
        throw new Error("User already exist")
    }

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashPassword(password)
    })

    // Validate user adata
    if(!user){
        res.status(400)
        throw new Error("Invalid user data")
    }

    // Successful request and send token
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateTOken(user._id)
    })
})

module.exports = {
    registerUser
}