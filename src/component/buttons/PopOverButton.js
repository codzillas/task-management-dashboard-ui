import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { POPOVERCONTENT__HEADER } from "../../constants/Constants";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function PopOverButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div sx={{ marginLeft: 0 }}>
      {!isSmallScreen && (
        <Button
          startIcon={<AddCircleIcon />}
          aria-describedby={id}
          onClick={handleClick}
          variant="text"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: 1,
            boxShadow: "0 .5 1.2 rgba(0, 0, 0, 0.1)",
            color: "white",
            padding: "1.2 1.5",
            minWidth: 8,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transition: "0.3s ease",
            cursor: "pointer",
          }}
        >
          Create
        </Button>
      )}

      {/* Single icon button for small screens */}
      {isSmallScreen && (
        <IconButton
          aria-label="create"
          onClick={handleClick}
          sx={{ color: "white", p: 0 }}
        >
          <AddCircleIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
      )}

      {/* Popover to show the action bar */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          p: "1",
        }}
      >
        <Box
          sx={{
            p: 1,
          }}
        >
          {Object.values(POPOVERCONTENT__HEADER).map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                p: 0.5,
                "&:hover": {
                  backgroundColor: "rgba(0, 123, 255, 0.1)",
                  p: 1,
                },
              }}
              onClick={handleClose}
            >
              <AddIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Popover>
    </div>
  );
}
