import {
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { boardViewStyles } from "./BoardViewStyles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./Task"; // Ensure this is your TaskCard component
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import useCreateTask from "../../hooks/task/useCreateTask";
import { AppContext } from "../../context/store";

export default function Section({ section, tasks, setTasks }) {
  const { mainSectionContainer__Inner_Inner, sectionHeader } =
    boardViewStyles();
  const { selectedProject } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [taskName, setTaskName] = React.useState("");
  const [newTaskCreated, setNewTaskCreated] = React.useState(false);
  const [showTaskCard, setShowTaskCard] = React.useState(false);
  const { postTask } = useCreateTask();

  React.useEffect(() => {
    if (
      newTaskCreated &&
      tasks?.filter((t) => t.section_id === section.section_id).length >= 3
    ) {
      scrollToBottom();
    }
  }, [tasks, newTaskCreated, section.section_id]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    handleClose();
  };

  const handleAddClick = () => {
    // Show the task card when the button is clicked
    setShowTaskCard((prev) => !prev);
  };

  const handleTaskNameChange = (name) => {
    setTaskName(name);
  };

  const handleAddTask = async (sectionId) => {
    if (taskName.trim() === "") return; // Prevent adding empty tasks

    const { response } = await postTask({
      name: taskName,
      projectDetails: { project_name: selectedProject.project_id },
      sectionId: section.section_id,
    });
    setNewTaskCreated(true);
    setTasks((prevTasks) => [
      ...prevTasks,
      { section_id: sectionId, name: taskName, task_id: response.task_id }, // Added task_id for uniqueness
    ]); // Add new task to the array
    setTaskName(""); // Clear the input after adding the task
  };

  const handleTaskBlur = (sectionId) => {
    handleAddTask(sectionId);
  };

  const handleKeyDown = (event, sectionId) => {
    if (event.key === "Enter") {
      handleAddTask(sectionId);
    }
  };

  const scrollContainerRef = React.useRef(null);
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setNewTaskCreated(false);
  };

  return (
    <Box key={section.section_id} sx={mainSectionContainer__Inner_Inner}>
      <Box sx={sectionHeader}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: 16 }} variant="h3">
            {section.name}
          </Typography>
          <Typography sx={{ mx: 1, fontSize: 16 }} variant="h3">
            {tasks?.filter((t) => t.section_id === section.section_id).length}
            {/* Display the number of tasks */}
          </Typography>
        </Box>
        <div>
          <Button
            variant="text" // Use text variant for a transparent background
            onClick={handleAddClick} // Show the input card on button click
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
      <Droppable droppableId={section.section_id}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{ padding: 2, overflowY: "auto" }}
          >
            {/* Render existing tasks using TaskCard */}
            <Box sx={{ marginTop: 2 }}>
              {tasks?.filter((t) => t.section_id === section.section_id)
                .length > 0 ? (
                tasks
                  .filter((t) => t.section_id === section.section_id)
                  .map((task, index) => (
                    <Draggable
                      key={task.task_id}
                      draggableId={String(task.task_id)}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            taskName={task.name}
                            onTaskNameChange={() => {}} // You can implement task name editing if needed
                            onBlur={() => {}} // You can implement onBlur behavior if needed
                          />
                        </Box>
                      )}
                    </Draggable>
                  ))
              ) : (
                <Typography variant="body2" color="gray">
                  No tasks added yet.
                </Typography>
              )}
            </Box>
            {/* Show the input card for new task */}
            {showTaskCard && (
              <TaskCard
                taskName={taskName}
                onTaskNameChange={handleTaskNameChange}
                onBlur={() => handleTaskBlur(section.section_id)} // Call handleTaskBlur on blur
                handleKeyDown={(e) => {
                  handleKeyDown(e, section.section_id);
                }}
              />
            )}
            {/* Button to Show Task Card */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddClick} // Only opens the input card
              sx={{ marginTop: 2 }} // Margin to separate from other elements
            >
              + Add Task
            </Button>
            {provided.placeholder} {/* Important for maintaining space */}
            <div ref={scrollContainerRef} />
          </Box>
        )}
      </Droppable>
    </Box>
  );
}
