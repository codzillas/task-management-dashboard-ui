import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../searchBar/SearchBar";
import PopOverButton from "../buttons/PopOverButton";
import AvatarAction from "../avatarDot/AvatarAction";

export default function SearchAppBar({ onMenuClick }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Menu Icon on the far left */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>

          {/* Typography, hidden on small screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              ml: 1,
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Taskey
            </Typography>
          </Box>
          <Box
            sx={{
              display: { sm: "inline-flex" },
              alignItems: "center",
              ml: { md: 4, xs: 0, sm: 1, lg: 4, xl: 6 },
            }}
          >
            <PopOverButton />
          </Box>

          {/* SearchBar centered */}
          <Box
            sx={{
              flexGrow: 1,
              mx: { md: 2, xs: 1, sm: 1, lg: 2, xl: 4 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SearchBar />
          </Box>

          {/* Avatar on the far right */}
          <Box sx={{ display: { sm: "inline-flex" } }}>
            <AvatarAction />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
