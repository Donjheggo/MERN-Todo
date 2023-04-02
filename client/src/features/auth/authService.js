import axios from 'axios';

const Register_API = "/api/v1/users/register";
const Login_API = "/api/v1/users/login";

// Register user
const register = async (userData) => {
    const response = await axios.post(Register_API, userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(Login_API, userData)
    if(response){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data
}

const authService = {
    register,
    login
}

export default authService;
