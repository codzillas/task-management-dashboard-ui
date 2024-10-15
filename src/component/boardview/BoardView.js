import { Box, Modal, TextField, Typography } from "@mui/material";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { AppContext } from "../../context/store";
import useGetProject from "../../hooks/project/useGetProject";
import useCreateSection from "../../hooks/section/useCreateSection";
import useGetTasks from "../../hooks/task/useGetTasks";
import useUpdateTask from "../../hooks/task/useUpdateTask";
import CreateTaskPopup from "../projects/CreateTaskPopup";
import { boardViewStyles } from "./BoardViewStyles";
import Section from "./Section";

function BoardView({ isModalOpen, toggleModal }) {
  const scrollContainerRef = useRef(null);
  const ref = useRef(null);
  const { selectedProject } = useContext(AppContext);
  const [addSectionClicked, setAddSectionClicked] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);
  const [newSectionCreated, setNewSectionCreated] = useState(false);
  const [tasks, setTasks] = React.useState([]); // Array to hold multiple tasks

  const [sectionName, setSectionName] = useState("");
  const { apiData: updatesTask, updateTask } = useUpdateTask();
  const { apiData: getTasksApiData, getTasks } = useGetTasks();
  const { apiData, getProject } = useGetProject({
    projectId: selectedProject.project_id,
  });
  const { apiData: createdSection, createSection } = useCreateSection();
  const {
    mainSectionContainer,
    mainSectionContainer__Inner,
    mainSectionContainer__Inner_Inner,
  } = boardViewStyles();

  const resetStates = () => {
    setAddSectionClicked(false);
    setSectionName("");
  };

  // API CALLS //
  const addNewSection = () => {
    if (sectionName) {
      createSection({ sectionName, projectId: selectedProject.project_id });
      setNewSectionCreated(true);
    }
  };
  const getProjectDetails = () => {
    if (selectedProject.project_id) {
      getProject({ projectId: selectedProject.project_id });
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        addNewSection();
        resetStates();
      }
    },
    [sectionName, addNewSection]
  );

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollWidth, // Scroll to the maximum width
        behavior: "smooth", // Smooth scrolling
      });
      setNewSectionCreated(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && sectionName) {
      addNewSection();
      resetStates();
    }
  };

  // SIDE EFFECTS //
  useEffect(() => {
    getProjectDetails();
  }, [createdSection?.section_id]);

  useEffect(() => {
    setProjectDetails(apiData);
  }, [apiData]);

  useEffect(() => {
    if (newSectionCreated) {
      scrollToRight();
    }
  }, [projectDetails]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  React.useEffect(() => {
    getTasks();
  }, [updatesTask?.section_id]);

  React.useEffect(() => {
    setTasks(getTasksApiData);
  }, [getTasksApiData]);

  useEffect(() => {
    getProjectDetails();
  }, [selectedProject.project_id, getProject]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    updateTask({
      taskId: tasks?.filter((t) => t.section_id === source.droppableId)[
        source.index
      ].task_id,
      sectionId: destination.droppableId,
    });
  };

  return (
    <>
      <Box sx={mainSectionContainer}>
        <Box sx={mainSectionContainer__Inner} ref={scrollContainerRef}>
          <DragDropContext
            onDragEnd={(result) => {
              handleOnDragEnd(result, tasks, setTasks);
            }}
          >
            {projectDetails?.sections?.map((section) => (
              <Section
                key={section.section_id}
                section={section}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </DragDropContext>
          <Box sx={mainSectionContainer__Inner_Inner}>
            {addSectionClicked ? (
              <TextField
                value={sectionName}
                autoFocus
                ref={ref}
                placeholder="Add Section"
                onChange={(e) => setSectionName(e.target.value)}
                onKeyDown={handleKeyDown}
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
            ) : (
              <Typography
                ref={ref}
                variant="h5"
                onClick={() => setAddSectionClicked(true)}
              >
                Add Section
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={() => toggleModal(false)}
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
            <CreateTaskPopup
              toggleModal={toggleModal}
              defaultProjectDetails={projectDetails}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default BoardView;
