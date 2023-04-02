import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../features/auth/authSlice';
import Loader from '../components/Loader'
import { toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
        MERN-TODO
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password} = Object.fromEntries(
      formData.entries()
    ); 
    try{
      dispatch(login({email, password}))
    }catch(err){
      toast.error(err.message)
    }
  };

  useEffect( () => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate("/")
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
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
              href="/register"
              variant="body2"
              sx={{ textDecoration: "none", color: "#87986A" }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default Login;
