import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useTheme } from "@mui/material/styles";
import React from "react";
import { useStyles } from "./useStyles";
import { drawerItemType } from "../../constants/Constants";
import useGetProjects from "../../hooks/useGetProjects";
import fetchDataFromAPI from "../../util/fetchDataFromAPI";
import { RecentActorsRounded } from "@mui/icons-material";
import { AppContext } from "../../context/store";
import PopOverButton from "../buttons/PopOverButton";

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

  const { userProjects, setUserProject } = React.useContext(AppContext);
  const { apiData: projectsList, getProjects } = useGetProjects();
  console.log("userProjects", userProjects);
  React.useEffect(() => {
    getProjects();
  }, []);

  React.useEffect(() => {
    if (projectsList?.length) {
      setUserProject(projectsList);
    }
  }, [projectsList]);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Typography sx={titleStyle}>Projects</Typography>
          <PopOverButton
            variant="small"
            color="#1876d2"
            circleFont="1.5rem"
            openPopup
          />
        </Box>
        <Box sx={{ py: 1 }}>
          {userProjects?.map((project) => (
            <Typography sx={projectLabelStyle}>
              {project.project_name}
            </Typography>
          ))}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default DraggableDrawer;
