import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import { useDrawerState } from "./constants/Constants";
import Profile from "./pages/Profile/Profile";
import AppLayout from "./layout/header/AppLayout";
import MainContentArea from "./layout/Main/content-area/ContentArea";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:projectId" element={<MainContentArea />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
