import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./component/auth/Login";
import Layout from "./Layout";
import Register from "./component/auth/Register";
import Profile from "./pages/Profile/Profile";
import { useDrawerState } from "./constants/Constants";
import Home from "./pages/Home/Home";

const PathRouter = () => {
  const {
    isOpen,
    toggleDrawer,
    handleDrawerClose,
    handleItemClick,
    selectedItem,
  } = useDrawerState();
  return (
    <Routes>
      <Route path="/" element={<Layout toggleDrawer={toggleDrawer} />}>
        <Route path="/profile" element={<Profile />} />
        <Route
          index
          element={
            <Home
              selectedItem={selectedItem}
              isOpen={isOpen}
              handleDrawerClose={handleDrawerClose}
              handleItemClick={handleItemClick}
              toggleDrawer={toggleDrawer}
            />
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<Register />} />
    </Routes>
  );
};

export default PathRouter;
