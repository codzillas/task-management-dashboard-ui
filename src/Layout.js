import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchAppBar from "./component/appbar/SearchAppBar";
import { AppContext } from "./context/store";

const Layout = ({ toggleDrawer }) => {
  const [userProjects, setUserProject] = useState([]);
  const [userTask, setUserTask] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [localStorage.getItem("token")]);
  return (
    <AppContext.Provider
      value={{ userProjects, setUserProject, userTask, setUserTask }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <SearchAppBar onMenuClick={() => toggleDrawer()} />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
