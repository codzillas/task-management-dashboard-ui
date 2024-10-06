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

export const useDrawerState = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDrawerClose = () => {
    toggleDrawer(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return {
    isOpen,
    selectedItem,
    toggleDrawer,
    handleDrawerClose,
    handleItemClick,
  };
};

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
