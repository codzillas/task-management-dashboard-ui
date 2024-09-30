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
  const { StyledDrawer, sidebarItems } = useStyles();

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
      <Box sx={{ width: 240, padding: 1 }} role="presentation">
        <List>{sidebarItems.map((item, index) => getDrawerItem(item))}</List>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontWeight: 500,
            padding: "1rem 1.2rem 0",
          }}
        >
          Projects
        </Typography>
        <Box sx={{ py: 1 }}>
          {["project 1", "project 2", "project 3"].map((project) => (
            <Typography sx={{ px: 2, py: 1, cursor: "pointer" }}>
              {project}
            </Typography>
          ))}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default DraggableDrawer;
