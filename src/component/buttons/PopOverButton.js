import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  POPOVERCONTENT__HEADER,
  useProjectstate,
} from "../../constants/Constants";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { Modal, useMediaQuery } from "@mui/material";
import CreateProjectPopup from "../projects/CreateProjectPopup";
import CreateTaskPopup from "../projects/CreateTaskPopup";

export default function PopOverButton({
  variant,
  color,
  circleFont,
  openPopup,
}) {
  const { handleClose, setAnchorEl, anchorEl } = useProjectstate();
  const [isModalOpen, toggleModal] = useState(false);
  const [describedBy, setDescribedBy] = useState(false);
  const [modalType, setModalType] = useState(POPOVERCONTENT__HEADER.project);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOptionClick = (option) => {
    toggleModal(true);
    if (option === POPOVERCONTENT__HEADER.project) {
      setModalType(POPOVERCONTENT__HEADER.project);
    } else if (option === POPOVERCONTENT__HEADER.task) {
      setModalType(POPOVERCONTENT__HEADER.task);
    }
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    const open = Boolean(anchorEl);
    setDescribedBy(open ? "simple-popover" : "");
  }, [anchorEl]);

  return (
    <div sx={{ marginLeft: 0 }}>
      {isSmallScreen || variant === "small" ? (
        <IconButton
          aria-label="create"
          onClick={(e) => {
            if (openPopup) {
              handleOptionClick(POPOVERCONTENT__HEADER.project);
            } else {
              handleClick(e);
            }
          }}
          sx={{ color: color ?? "white", p: 0 }}
        >
          <AddCircleIcon sx={{ fontSize: circleFont ?? "2.5rem" }} />
        </IconButton>
      ) : (
        <Button
          startIcon={<AddCircleIcon />}
          aria-describedby={describedBy}
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
      <Popover
        id={describedBy}
        open={Boolean(anchorEl)}
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
              onClick={() => handleOptionClick(option)}
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
            >
              <AddIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Popover>
      <Modal
        open={isModalOpen} // Modal open if there's content
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: 24,
              minWidth: 300,
            }}
          >
            {/* {modalContent} Render the selected component here */}
            {modalType === POPOVERCONTENT__HEADER.project && (
              <CreateProjectPopup toggleModal={toggleModal} />
            )}
            {modalType === POPOVERCONTENT__HEADER.task && (
              <CreateTaskPopup toggleModal={toggleModal} />
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
