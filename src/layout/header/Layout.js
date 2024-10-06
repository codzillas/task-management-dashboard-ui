import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchAppBar from "./SearchAppBar";
import { AppContext } from "../../context/store";
import Main from "../Main/Main";

const Layout = ({
  toggleDrawer,
  selectedItem,
  isOpen,
  handleDrawerClose,
  handleItemClick,
}) => {
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
        <div
        // style={{
        //   display: "flex",
        //   flexGrow: 1,
        //   marginTop: 64,
        // }}
        >
          <Main
            selectedItem={selectedItem}
            isOpen={isOpen}
            handleDrawerClose={handleDrawerClose}
            onItemClick={handleItemClick}
            toggleDrawer={toggleDrawer}
          />
          {/* <DraggableDrawer
            selectedItem={selectedItem}
            isOpen={isOpen}
            handleDrawerClose={handleDrawerClose}
            onItemClick={handleItemClick}
            toggleDrawer={toggleDrawer}
          />
          <Outlet /> */}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
