const { Router } = require('express');
const { registerUser, loginUser, updateUserData, getUserData } = require('../controllers/userController')
const authProtect = require('../middlewares/authProtect')

const router = Router();

router.post("/register", registerUser)
router.post("/login", loginUser)

router
    .route("/profile")
    .get(authProtect, getUserData)
    .put(authProtect, updateUserData)

module.exports = router
    