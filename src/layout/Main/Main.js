import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DraggableDrawer from "./drawer/DraggableDrawer";
import MainContentArea from "./content-area/ContentArea";

function Main({
  selectedItem,
  isOpen,
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
        onItemClick={handleItemClick}
        toggleDrawer={toggleDrawer}
      />
      <MainContentArea>
        <Outlet />
      </MainContentArea>
    </Box>
  );
}

export default Main;
