import { useState } from "react";

export const POPOVERCONTENT__HEADER = {
  project: "Project",
  task: "Tasks",
};

export const drawerItemType = {
  divider: "divider",
  drawerItem: "drawerItem",
  label: "label",
};

export const drawerWidth = 240;

export const useProjectstate = () => {
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setIsCreatingProject(false);
  };

  return {
    isCreatingProject,
    setIsCreatingProject,
    handleClose,
    anchorEl,
    setAnchorEl,
  };
};
