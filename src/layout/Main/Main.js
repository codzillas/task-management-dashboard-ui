import { Box } from "@mui/material";
import PersistentDrawer from "./drawer/PersistentDrawer";
import { mainBoxStyle } from "./useMainStyles";

function Main({ isOpen, toggleDrawer }) {
  return (
    <Box sx={mainBoxStyle}>
      <PersistentDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default Main;
