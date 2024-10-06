import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import theme from "../../theme/theme";

const SubHeader = ({ projectName }) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(6), // Smaller margin for mobile screens
        },
      }}
    >
      {/* <Typography variant="h4" sx={{ padding: 1, height: "10vh" }}>
        {projectName}
      </Typography> */}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          color="primary"
          startIcon={<AddCircleIcon />}
          //   onClick={handleClick}
          variant="text"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
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
          Create Task
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ height: "73vh" }}>SubHeader Content</Box>
      </Box>
    </Box>
  );
};

export default SubHeader;
