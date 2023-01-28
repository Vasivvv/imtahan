import React from "react";
import {
  createBrowserRouter,

} from "react-router-dom";
import Add from "../Pages/Add";
import Home from "../Pages/Home";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Add",
    element: 
    <>
    <Navbar/>
    <Add/>
    <Footer/>
    </>
  },
]);

export default router;