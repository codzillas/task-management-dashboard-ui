import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DraggableDrawer from "./drawer/DraggableDrawer";

function Main({
  selectedItem,
  isOpen,
  handleDrawerClose,
  handleItemClick,
  toggleDrawer,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        height: "100%",
        top: 64,
        left: 0,
        flexGrow: 1,
      }}
    >
      <DraggableDrawer
        selectedItem={selectedItem}
        isOpen={isOpen}
        handleDrawerClose={handleDrawerClose}
        onItemClick={handleItemClick}
        toggleDrawer={toggleDrawer}
      />
      <Outlet />
    </Box>
  );
}

export default Main;
