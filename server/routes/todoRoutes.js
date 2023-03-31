const { Router } = require('express');
const { getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController')
const authProtect = require('../middlewares/authProtect')

const router = Router();

router
    .route("/")
    .get(authProtect, getTodo)
    .post(authProtect, createTodo)

router
    .route("/:id")
    .put(authProtect, updateTodo)
    .delete(authProtect, deleteTodo)


module.exports = router;