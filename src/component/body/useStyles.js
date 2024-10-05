import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import { drawerItemType } from "../../constants/Constants";

function useStyles() {
  const sidebarItems = [
    { type: drawerItemType.drawerItem, text: "Home", icon: <MailIcon /> },
    { type: drawerItemType.drawerItem, text: "My Tasks", icon: <MailIcon /> },
    { type: drawerItemType.divider },
  ];
  const StyledDrawer = styled(Drawer)(({ theme, isSmallScreen }) => ({
    "& .MuiDrawer-paper": {
      width: 240,
      marginTop: 60,
      [theme.breakpoints.down("sm")]: {
        width: isSmallScreen ? "100%" : 150, // Smaller width on mobile screens
      },
    },
  }));
  const titleStyle = {
    fontSize: "14px",
    lineHeight: "20px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: 500,
    // padding: "1rem 1.2rem 0",
  };

  const boxStyle = { width: 240, padding: 1 };

  const projectLabelStyle = { px: 2, py: 1, cursor: "pointer" };

  return {
    StyledDrawer,
    sidebarItems,
    titleStyle,
    boxStyle,
    projectLabelStyle,
  };
}

export { useStyles };
