import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import Dialog from "../components/Dialog";
import { reset, getTodos, createTodo, deleteTodo, updateTodo } from "../features/todos/todoSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { title, description, dueDate } = Object.fromEntries(formData.entries());
    console.log(title, description, dueDate);
    dispatch(createTodo({ title, description, dueDate }));
  };

  const handleUpdateSubmit = (e, id) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const { title, description, dueDate } = Object.fromEntries(formData.entries());
    dispatch(updateTodo({ id, todoData:{title, description, dueDate}}));
  }
  
  const todoElements = todos.length ? (
    todos.map((item) => (
      <Card
      key={item._id}
      title={item.title}
      description={item.description}
      dueDate={item.dueDate}
      update={(e) => handleUpdateSubmit(e, item._id)}
      delete={() => dispatch(deleteTodo(item._id))}
      isCompleted={item.completed ? "Yes" : "No"}
      />
    ))
  ) : (
    <Typography variant="h5" sx={{paddingLeft: '18px'}}>None</Typography>
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/");
    } else {
      dispatch(getTodos());
      return () => {
        dispatch(reset());
      };
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loader />;
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
        <Dialog submit={handleSubmit} />
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
