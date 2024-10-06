import { Box } from "@mui/material";
import PersistentDrawer from "./drawer/PersistentDrawer";

function Main({ isOpen, toggleDrawer }) {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        height: "100%",
        top: 64,
        left: 0,
        flexGrow: 1,
        width: "100%",
      }}
    >
      {/* <DraggableDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      /> */}
      <PersistentDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      {/* <MainContentArea>
        <Outlet />
      </MainContentArea> */}
    </Box>
  );
}

export default Main;
