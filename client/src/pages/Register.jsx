import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { register } from "../features/auth/authSlice";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Loader from '../components/Loader'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/" sx={{textDecoration: 'none'}}>
        MERN-TODO
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { name, email, password, confirmPassword } = Object.fromEntries(
      formData.entries()
    ); 

    if(password !== confirmPassword){
      toast.error("Password do not match");
    }else{
      try{
        dispatch(register({name, email, password}));
      }catch(err){
        toast.error(err.message)
      }
    }
      
  };

  useEffect( () => {
    if(isError){
      toast.error(message)
    }
    console.log(user)
    if(user){
      navigate("/")
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if(isLoading){
    return <Loader/>
  }


  return (
    <>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full name"
          name="name"
          autoComplete="text"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="confirm-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#718355",
            "&:hover": { backgroundColor: "#87986A" },
          }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link
              href="/"
              variant="body2"
              sx={{ textDecoration: "none", color: "#87986A" }}
            >
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default Register;
