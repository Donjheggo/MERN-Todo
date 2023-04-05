import axios from "axios";

const TODO_API = "/api/v1/todos";


// Get Todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.get(TODO_API, config);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};


// Create Todo
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.post(TODO_API, todoData, config);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateTodo = async (id, todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.put(`${TODO_API}/${id}`, todoData, config);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};


const deleteTodo = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.delete(`${TODO_API}/${id}`, config);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};


const todoService = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};

export default todoService;
