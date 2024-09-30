import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 1),
  },
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  left: 0, // Position the icon to the left
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1), // Adjust padding for top and bottom
    paddingLeft: `calc(1em + ${theme.spacing(6)})`, // Increase left padding to accommodate the icon
    transition: theme.transitions.create("width"),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: `calc(1em + ${theme.spacing(2)})`, // Adjust padding for small screens
      minWidth: "15ch", // Minimum width to prevent overlap
    },
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
};

export default SearchBar;
