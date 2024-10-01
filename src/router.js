import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import Layout from "./Layout";
import Register from "./component/auth/Register";

const PathRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<Register />} />
    </Routes>
  );
};

export default PathRouter;
