const { Router } = require('express');
const { registerUser } = require('../controllers/userController')

const router = Router();

router.post("/login")
router.post("/register", registerUser)

router
    .route("/profile")
    .get()
    .put()

module.exports = router
    