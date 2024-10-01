import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useStyles } from "./useStyles";
import { drawerItemType } from "../../constants/Constants";

const DraggableDrawer = ({
  isOpen,
  onItemClick,
  toggleDrawer,
  selectedItem,
}) => {
  const theme = useTheme();
  const {
    StyledDrawer,
    sidebarItems,
    titleStyle,
    boxStyle,
    projectLabelStyle,
  } = useStyles();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  function getDrawerItem(item) {
    switch (item.type) {
      case drawerItemType.divider:
        return <Divider />;

      default:
        return (
          <ListItem
            sx={{ cursor: "pointer" }}
            button
            key={item.text}
            onClick={() => {
              onItemClick(item.text);
              if (selectedItem !== item.text) {
                toggleDrawer();
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        );
    }
  }
  return (
    <StyledDrawer
      anchor="left"
      open={isOpen}
      variant="persistent"
      isSmallScreen={isSmallScreen}
      ModalProps={{
        keepMounted: true, // Keep mounted to make it responsive on mobile
      }}
      sx={{ zIndex: 19 }}
    >
      <Box sx={boxStyle} role="presentation">
        <List>{sidebarItems.map((item, index) => getDrawerItem(item))}</List>
        <Typography sx={titleStyle}>Projects</Typography>
        <Box sx={{ py: 1 }}>
          {["project 1", "project 2", "project 3"].map((project) => (
            <Typography sx={projectLabelStyle}>{project}</Typography>
          ))}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default DraggableDrawer;
