import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Due date icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Tick icon
import PersonIcon from "@mui/icons-material/Person"; // Assign user icon
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";

function TaskCard({ taskName, onTaskNameChange, onBlur, handleKeyDown }) {
  return (
    <Card
      sx={{
        backgroundColor: "#2a2b2d",
        borderRadius: "16px", // Rounded corners
        color: "white", // Text color
        width: 300, // Card width
        padding: 2, // Padding inside the card
      }}
    >
      <CardContent>
        {/* Row 1: Task Name with Tick Icon */}
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              height: 0,
              width: 0,
              border: "2px solid white",
              borderRadius: "50%",
              backgroundColor: "transparent",
              marginRight: 1,
            }}
          >
            <CheckCircleIcon sx={{ color: "white", fontSize: 16 }} />
          </IconButton>
          <TextField
            autoFocus={!taskName ? true : false}
            variant="outlined"
            placeholder="Add task name"
            onChange={(e) => onTaskNameChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={onBlur} // Call the provided onBlur function
            value={taskName}
            sx={{
              backgroundColor: "#3c3d3f", // Slightly darker background for the input
              borderRadius: "4px",
              flexGrow: 1, // Fill available space
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // White border
                },
                "&:hover fieldset": {
                  borderColor: "white", // Hover effect
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Focused effect
                },
                "& input": {
                  color: "white", // Text color in the input field
                },
              },
            }}
          />
        </Box>

        {/* Row 2: Assign User and Due Date Icons */}
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          {/* Assign Task User Icon */}
          <Tooltip title="Assign Task">
            <IconButton sx={{ color: "white" }}>
              <PersonIcon />
            </IconButton>
          </Tooltip>

          {/* Due Date Icon */}
          <Tooltip title="Due Date">
            <IconButton sx={{ color: "white" }}>
              <CalendarTodayIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
