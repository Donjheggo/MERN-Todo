import React from 'react';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from './components/MainLayout'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route/>
      <Route/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  )
}

export default App