import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { boardViewStyles } from "./BoardViewStyles";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import TaskCard from "./Task";

export default function Section({ section }) {
  const { mainSectionContainer__Inner_Inner, sectionHeader, taskCard } =
    boardViewStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    console.log(action); // Handle menu item click action here
    handleClose();
  };

  const handleAddClick = () => {
    console.log("Add button clicked"); // Handle add button click here
  };

  const [taskName, setTaskName] = React.useState("");
  const [showTaskCard, setShowTaskCard] = React.useState(false);
  const toggleTaskCard = () => {
    setShowTaskCard((prev) => !prev);
  };

  const handleTaskNameChange = (name) => {
    setTaskName(name);
  };

  const handleAddTask = () => {
    // Logic to add the task (for now, just log it)
    console.log("Task added:", taskName);
    setTaskName(""); // Clear the input after adding the task
    setShowTaskCard(false); // Hide the task card after adding
  };
  return (
    <Box key={section.section_id} sx={mainSectionContainer__Inner_Inner}>
      <Box sx={sectionHeader}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
            }}
            variant="h3"
          >
            {section.name}
          </Typography>
          <Typography sx={{ mx: 1, fontSize: 16 }} variant="h3">
            {0}
          </Typography>
        </Box>
        <div>
          <Button
            variant="text" // Use text variant for a transparent background
            onClick={handleAddClick}
            sx={{
              minWidth: "auto", // Adjust button width
              padding: 1, // Adjust padding to fit the icon
              color: "white", // Set icon color to white
            }}
          >
            <AddIcon />
          </Button>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ color: "white" }}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: "auto",
              },
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick("Action 1")}>
              Action 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Action 2")}>
              Action 2
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Action 3")}>
              Action 3
            </MenuItem>
          </Menu>
        </div>
      </Box>
      <Box sx={{ padding: 2 }}>
        {/* Task Card */}
        {showTaskCard && (
          <TaskCard
            taskName={taskName}
            onTaskNameChange={handleTaskNameChange}
            onAddTask={handleAddTask}
          />
        )}
        {/* Button to Show Task Card */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleTaskCard()} // Show the task card on button click
        >
          + Add Task
        </Button>
      </Box>
    </Box>
  );
}
