import axios from "axios";

const TODO_API = "/api/v1/todos";

const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(TODO_API, config);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// const createTodo = async(data, token) => {
//     const config = {
//         headers: {
//             token: `Bearer ${token}`
//         }
//     }
//     try {
//         const response = await axios.post(TODO_API, data, config)
//         if(response.data){
//             return response.data
//         }
//     }catch(err){
//         console.log(err)
//         throw err
//     }
// }

const todoService = {
  getTodos,
  // createTodo
};

export default todoService;
