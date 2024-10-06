import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

function useStyles() {
  const sidebarItems = [];
  const drawerWidth = 240;
  const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => {
      return prop !== "isScrolled" || prop != "scrollPosition";
    },
  })(({ theme, isSmallScreen, isScrolled, scrollPosition }) => ({
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      marginTop: 65 - scrollPosition > 0 ? 65 - scrollPosition : 0,
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
  };

  const boxStyle = { width: 240, padding: 1 };

  const projectLabelStyle = { px: 2, py: 1, cursor: "pointer" };

  const CustomContentArea = styled("main", {
    shouldForwardProp: (prop) => {
      return prop !== "open";
    },
  })(({ theme, open }) => ({
    flexGrow: 1,
    width: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: open === true ? drawerWidth : 0,
  }));

  return {
    StyledDrawer,
    sidebarItems,
    titleStyle,
    boxStyle,
    projectLabelStyle,
    CustomContentArea,
  };
}

export { useStyles };
