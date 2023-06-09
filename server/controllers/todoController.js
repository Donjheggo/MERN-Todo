const asyncHandler = require('express-async-handler');
const Todo = require('../database/models/todoModel');


// @desc Get user Todos
// @route GET /api/v1/todos
// @access Private
const getTodo = asyncHandler(async(req, res) => {
    const todos = await Todo.find({user: req.user.id})
    res.status(200).json(todos)
})


// @desc Create user Todos
// @route POST /api/v1/todos
// @access Private
const createTodo = asyncHandler(async(req, res) => {
    const {title, description, dueDate} = req.body;
    if(!title || !description){
        res.status(400).json({message: "Please add required fields"})
    }
    const data = {};
    if(title) data.title = title
    if(description) data.description = description
    if(dueDate) data.dueDate = dueDate;
    const todo = await Todo.create(
        {
            user: req.user, 
            dueDate: data.dueDate,
            title: data.title,
            description: data.description
        }
    );

    if(!todo){
        res.status(400).json({message: "Invalid data"})
    }
    
    res.status(201).json(todo);
})


// @desc Update user Todo
// @route PUT /api/v1/todo/:id
// @access Private
const updateTodo = asyncHandler(async(req, res) => {
    const {title, description, dueDate, completed} = req.body;
    const updatedData = {}
    if(title) updatedData.title = title
    if(description) updatedData.description = description
    if(dueDate) updatedData.dueDate = dueDate;
    if(completed !== undefined) updatedData.completed = completed
    console.log(updatedData)
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        updatedData,
        {new: true}
    );

    if(!todo){
        res.status(400).json({message: "Invalid data"})
    }
    
    res.status(201).json(todo);
})

// @desc Delete user Todo
// @route DELETE /api/v1/todo/:id
// @access Private
const deleteTodo = asyncHandler(async(req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
    if(!deletedTodo){
        res.status(404).json({message: "Todo doesn't exists"})
    }
    res.status(200).json({message: `Deleted ${deletedTodo}`})
})


module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}