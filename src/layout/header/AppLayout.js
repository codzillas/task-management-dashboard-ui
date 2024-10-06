import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/store";
import Main from "../Main/Main";
import SearchAppBar from "./SearchAppBar";

const AppLayout = () => {
  const [userProjects, setUserProject] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [userTask, setUserTask] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [localStorage.getItem("token")]);

  const appContextValue = React.useMemo(
    () => ({
      userProjects,
      setUserProject,
      userTask,
      setUserTask,
      isOpen,
      toggleDrawer,
      selectedItem,
      setSelectedItem,
    }),
    [
      userProjects,
      setUserProject,
      userTask,
      setUserTask,
      isOpen,
      toggleDrawer,
      selectedItem,
      setSelectedItem,
    ]
  );
  return (
    <AppContext.Provider value={appContextValue}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <SearchAppBar onMenuClick={() => toggleDrawer()} />
        <Main isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </Box>
    </AppContext.Provider>
  );
};

export default AppLayout;
