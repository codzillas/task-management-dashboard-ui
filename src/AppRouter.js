import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import BoardView from "./component/boardview/BoardView";
import { useDrawerState } from "./constants/Constants";
import Profile from "./pages/Profile/Profile";
import Layout from "./layout/header/Layout";

const AppRouter = () => {
  const {
    isOpen,
    toggleDrawer,
    handleDrawerClose,
    handleItemClick,
    selectedItem,
  } = useDrawerState();

  const AppLayout = (
    <Layout
      selectedItem={selectedItem}
      isOpen={isOpen}
      handleDrawerClose={handleDrawerClose}
      handleItemClick={handleItemClick}
      toggleDrawer={toggleDrawer}
    />
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={AppLayout}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:projectId" element={<BoardView />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
