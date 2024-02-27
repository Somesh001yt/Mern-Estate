import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />} >
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
