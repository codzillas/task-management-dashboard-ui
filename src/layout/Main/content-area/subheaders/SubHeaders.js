import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button } from "@mui/material";
import * as React from "react";
import BoardView from "../../../../component/boardview/BoardView";
import theme from "../../../../theme/theme";
import themeColors from "../../../../constants/ThemeColors";

const SubHeader = ({ projectName }) => {
  const [isModalOpen, toggleModal] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: theme.spacing(8),
          height: "8vh",
          borderBottom: "1px solid #212121",
          backgroundColor: themeColors.subheader2,
          [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(7), // Smaller margin for mobile screens
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            startIcon={<AddCircleIcon />}
            //   onClick={handleClick}
            variant="text"
            onClick={() => {
              toggleModal(true);
            }}
            sx={{
              backgroundColor: theme.palette.primary.main,
              backdropFilter: "blur(10px)",
              color: theme.palette.text.secondary,
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
      </Box>
      <Box>
        <BoardView
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          projectName={projectName}
        />
      </Box>
    </React.Fragment>
  );
};

export default SubHeader;
