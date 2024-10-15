import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/store";
import { isAuthenticated } from "../../util/authToken";
import PersistentDrawer from "../Main/drawer/PersistentDrawer";
import { mainBoxStyle } from "../Main/useMainStyles";
import SearchAppBar from "./SearchAppBar";
import useAppLayoutHook from "./useAppLayoutHook";

const AppLayout = () => {
  const appLayoutHook = useAppLayoutHook();
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return (
    <AppContext.Provider value={appLayoutHook.appContextValue}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <SearchAppBar onMenuClick={() => appLayoutHook.toggleDrawer()} />
        <Box sx={mainBoxStyle}>
          <PersistentDrawer
            isOpen={appLayoutHook.isOpen}
            toggleDrawer={appLayoutHook.toggleDrawer}
          />
        </Box>
      </Box>
    </AppContext.Provider>
  );
};

export default AppLayout;
