import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import Dialog from "../components/Dialog";
import { getTodos, reset } from "../features/todos/todoSlice";
import Loader from '../components/Loader'
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { todos, isLoading, isError, message } = useSelector((state) => state.todos);
  
  const todoElements = todos.length ? todos.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
      dueDate={item.dueDate || <>no duedate</>}
    />
  )) : (<h1>No Todo</h1>) ;

  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if (!user) {
      navigate("/");
    }
    dispatch(getTodos());
    return () => {
      dispatch(reset());
    }
  }, []);
  

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography align="center" variant="h4">
          To do
        </Typography>
        <Dialog />
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}
      >
        {todoElements}
      </Grid>
    </>
  );
};

export default Home;
