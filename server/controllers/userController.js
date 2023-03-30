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

// @desc Login user
// @route POST /api/v1/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({ email });
        const isPasswordMatch = await comparePassword(password, user.password)

        // Check if email exist
        if(!user){
            res.status(401)
            throw new Error("Invalid credentials")
        }
        // Check if password match
        if(!isPasswordMatch){
            res.status(401)
            throw new Error("Invalid credentials")
        }
        // Success response
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateTOken(user._id)
        })
    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }

})


// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private
const getUserData = asyncHandler(async(req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        email: email,
        name: name
    })
})

// @desc Update user data
// @route PUT /api/v1/users/profile
// @access Private
const updateUserData = asyncHandler(async(req, res) => {
    try{
        const { name, password } = req.body
        const data = {}
        if(name) data.name = name
        if(password) data.password = hashPassword(password)
        const updatedData = await User.findByIdAndUpdate(req.user.id, data)
        if(req.body.email){
            res.status(400)
            throw new Error("Email can't be updated")
        }
        if(!updatedData){
            res.status(404);
            throw new Error('User not found')
        }
        res.status(202).json(updatedData)
    }catch(err){
        res.status(404)
        throw new Error(err.message)
    }
})

module.exports = {
    registerUser,
    loginUser,
    getUserData,
    updateUserData
}