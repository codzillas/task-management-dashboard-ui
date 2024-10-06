import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button } from "@mui/material";
import * as React from "react";
import theme from "../../theme/theme";
import BoardView from "../boardview/BoardView";

const SubHeader = ({ projectName }) => {
  const [isModalOpen, toggleModal] = React.useState(false);

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
          onClick={() => {
            toggleModal(true);
          }}
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
      <BoardView
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        projectName={projectName}
      />
    </Box>
  );
};

export default SubHeader;
