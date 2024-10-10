import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/store";
import Main from "../Main/Main";
import SearchAppBar from "./SearchAppBar";

const AppLayout = () => {
  const navigate = useNavigate();
  const [userProjects, setUserProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [userTask, setUserTask] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    if (selectedProject.project_id) {
      navigate(`/project/${selectedProject.project_id}`);
    }
  }, [selectedProject.project_id, navigate]);

  React.useEffect(() => {
    if (userProjects?.length) {
      setSelectedProject(userProjects[0]);
    }
  }, [userProjects, setSelectedProject]);

  const appContextValue = React.useMemo(
    () => ({
      userProjects,
      setUserProjects,
      userTask,
      setUserTask,
      isOpen,
      toggleDrawer,
      setSelectedProject,
      selectedProject,
    }),
    [
      userProjects,
      setUserProjects,
      userTask,
      setUserTask,
      isOpen,
      toggleDrawer,
      setSelectedProject,
      selectedProject,
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
