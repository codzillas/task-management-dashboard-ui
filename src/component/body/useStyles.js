import { Divider, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { drawerItemType } from "../../constants/Constants";

function useStyles() {
  const sidebarItems = [
    { type: drawerItemType.drawerItem, text: "Home", icon: <MailIcon /> },
    { type: drawerItemType.drawerItem, text: "My Tasks", icon: <MailIcon /> },
    { type: drawerItemType.drawerItem, text: "Inbox", icon: <InboxIcon /> },
    { type: drawerItemType.divider },
  ];
  // Styled drawer for responsive and draggable behavior
  const StyledDrawer = styled(Drawer)(({ theme, isSmallScreen }) => ({
    "& .MuiDrawer-paper": {
      width: 240,
      marginTop: 60,
      [theme.breakpoints.down("sm")]: {
        width: isSmallScreen ? "100%" : 150, // Smaller width on mobile screens
      },
    },
  }));

  return { StyledDrawer, sidebarItems };
}

export { useStyles };
