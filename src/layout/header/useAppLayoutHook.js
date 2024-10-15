import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function useAppLayoutHook() {
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
  return {
    appContextValue,
    isOpen,
    toggleDrawer,
  };
}

export default useAppLayoutHook;
