import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "../../component/searchBar/SearchBar";
import PopOverButton from "../../component/buttons/PopOverButton";
import AvatarAction from "../../component/avatarDot/AvatarAction";
import { useNavigate } from "react-router-dom";

export default function SearchAppBar({ onMenuClick }) {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="primary" sx={{ mt: 0, zIndex: 10 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Typography, hidden on small screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{ cursor: "pointer" }}
              component="div"
              onClick={() => {
                navigate("/");
              }}
            >
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
