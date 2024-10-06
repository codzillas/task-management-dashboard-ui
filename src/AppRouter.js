import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import BoardView from "./component/boardview/BoardView";
import { useDrawerState } from "./constants/Constants";
import Profile from "./pages/Profile/Profile";
import AppLayout from "./layout/header/AppLayout";

const AppRouter = () => {
  const { handleItemClick, selectedItem } = useDrawerState();

  const AppLayoutComponent = (
    <AppLayout selectedItem={selectedItem} handleItemClick={handleItemClick} />
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={AppLayoutComponent}>
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
