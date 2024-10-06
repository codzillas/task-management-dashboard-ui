import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MainContentArea from "../content-area/ContentArea";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../context/store";
import useGetProjects from "../../../hooks/useGetProjects";
import { AppBar, DrawerHeader, Main } from "../useMainStyles";

const drawerWidth = 240;

export default function PersistentDrawer() {
  // COMPONENT HOOKS //

  const [open, setOpen] = React.useState(false);
  const pathParams = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const { userProjects, setUserProject } = React.useContext(AppContext);

  // CUSTOM HOOKS //
  const { apiData: projectsList, getProjects } = useGetProjects();

  // SIDE EFFECTS //
  React.useEffect(() => {
    getProjects();
  }, []);

  React.useEffect(() => {
    if (Array.isArray(projectsList) && projectsList?.length) {
      setUserProject(projectsList);
    }
  }, [projectsList]);

  // HANDLERS //
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        sx={{
          marginTop: theme.spacing(8),
          [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(7), // Smaller margin for mobile screens
          },
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {pathParams.projectId}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: theme.spacing(8),
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userProjects?.map((project, index) => (
            <ListItem
              key={project.project_name}
              disablePadding
              onClick={() => {
                navigate(`/project/${project.project_name}`);
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={project.project_name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <MainContentArea>
          <Outlet />
        </MainContentArea>
      </Main>
    </Box>
  );
}
