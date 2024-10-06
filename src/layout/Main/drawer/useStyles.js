import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

function useStyles() {
  const sidebarItems = [];
  const drawerWidth = 240;
  const StyledDrawer = styled(Drawer)(({ theme, isSmallScreen }) => ({
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      marginTop: 65,
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

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
    })
  );

  return {
    StyledDrawer,
    sidebarItems,
    titleStyle,
    boxStyle,
    projectLabelStyle,
    Main,
  };
}

export { useStyles };
