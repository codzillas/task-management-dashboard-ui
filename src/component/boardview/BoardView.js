import { Box, Modal, TextField, Typography } from "@mui/material";
import * as React from "react";
import { AppContext } from "../../context/store";
import useGetProject from "../../hooks/useGetProject";
import CreateTaskPopup from "../projects/CreateTaskPopup";

function BoardView({ isModalOpen, toggleModal, projectName }) {
  const { selectedProject, setSelectedProject } = React.useContext(AppContext);
  console.log("selectedProject", selectedProject);
  const [addSectionClicked, setAddSectionClicked] = React.useState(false);
  const [sectionName, setSectionName] = React.useState("");
  const { apiData: selectedProjectDetails, getProject } = useGetProject({
    projectId: selectedProject.project_id,
  });

  const ref = React.useRef(null);
  console.log("sectionName", sectionName);
  const handleClickOutside = React.useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setAddSectionClicked(false);
        console.log("sectionName", sectionName);
        setSectionName("");
      }
    },
    [sectionName]
  );

  React.useEffect(() => {
    // Attach event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sectionName]);

  React.useEffect(() => {
    if (selectedProject.project_id) {
      getProject({ projectId: selectedProject.project_id });
    }
  }, [selectedProject.project_id]);
  console.log("selectedProjectrttttt", selectedProject);
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#29292c",
          overflowX: "auto",
        }}
      >
        <Box sx={{ height: "80vh", display: "flex", width: "max-content" }}>
          {selectedProject?.sections?.map((section) => (
            <Box
              key={section.section_id}
              sx={{
                height: "100%",
                border: "1px solid",
                p: 1,
                width: "100%",
                minWidth: "100%",
                boxSizing: "border-box",
                overflowY: "hidden",
              }}
            >
              <Typography sx={{ color: "white" }} variant="h5">
                {section.name}
              </Typography>
              {/* <Box sx={{ height: "100%", textAlign: "center", py: 4 }}>
                <Button sx={{ color: "gray", border: "1px solid " }}>
                  Add Task
                </Button>
              </Box> */}
            </Box>
          ))}
          <Box
            sx={{
              height: "100%",
              border: "1px solid",
              p: 1,
              width: "100%",
              minWidth: "100%",
              boxSizing: "border-box",
              overflowY: "hidden",
            }}
          >
            {addSectionClicked ? (
              <TextField
                value={sectionName}
                sx={{ color: "white" }}
                ref={ref}
                placeholder="Add Section"
                onChange={(e) => {
                  setSectionName(e.target.value);
                }}
              />
            ) : (
              <Typography
                ref={ref}
                sx={{ color: "white" }}
                variant="h5"
                onClick={() => {
                  setAddSectionClicked(true);
                }}
              >
                Add Section
              </Typography>
            )}

            {/* <Box sx={{ height: "100%", textAlign: "center", py: 4 }}>
                <Button sx={{ color: "gray", border: "1px solid " }}>
                  Add Task
                </Button>
              </Box> */}
          </Box>
        </Box>
      </Box>
      <Modal
        open={isModalOpen} // Modal open if there's content
        onClose={() => {
          toggleModal(false);
        }}
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
              defaultProjectDetails={{ project_name: projectName }}
            />
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default BoardView;
