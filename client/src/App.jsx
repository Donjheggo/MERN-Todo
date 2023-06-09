import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { useSelector } from 'react-redux'

const App = () => {
  const {user} = useSelector(state => state.auth)
  const isAuthenticated = Boolean(user);
  // const routes = isAuthenticated ? 
  // (
  //   <Route path="/" element={<MainLayout />}>
  //     <Route index element={<Home />} />
  //   </Route>
  // ): 
  // (
  //   <Route path="/" element={<AuthLayout />}>
  //     <Route index element={<LoginPage />} />
  //     <Route path="/register" element={<RegisterPage />} />
  //   </Route>
  // );
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
    <Route path="/home" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
    </>
 
  ));
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
