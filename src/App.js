import React from "react";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="register" element={<Register/>}></Route>
      </Routes>

    </>
  );
};

export default App;
