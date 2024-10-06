import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import usePostProject from "../../hooks/useCreateProjects";
import useGetProjects from "../../hooks/useGetProjects";
import { AppContext } from "../../context/store";
import { fetchDecodedToken } from "../../util/commonUtils";

const CreateProjectPopup = ({ toggleModal }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectStatus, setProjectStatus] = useState("Pending");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [alert, setAlert] = useState(null);
  const { setUserProjects } = React.useContext(AppContext);
  const { postProject } = usePostProject();
  const { apiData, getProjects } = useGetProjects();
  const decodedToken = fetchDecodedToken();
  React.useEffect(() => {
    if (apiData) {
      setUserProjects(apiData);
    }
  }, [apiData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response, errMsg } = await postProject({
      project_name: projectName,
      project_details: projectDetails,
      project_status: projectStatus,
      start_date: startDate,
      end_date: endDate,
      userId: decodedToken.id,
    });
    if (response?.ok) {
      setAlert({
        message: "Project created successfully!",
        severity: "success",
      });
      // Reset fields
      setProjectName("");
      setProjectDetails("");
      setProjectStatus("Pending");
      setStartDate("");
      setEndDate("");
      setTimeout(() => {
        toggleModal(false);
      }, 1000);

      getProjects();
    } else {
      setAlert({ message: errMsg, severity: "error" });
    }

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {alert && <Alert severity={alert.severity}>{alert.message}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Project Name"
          variant="outlined"
          value={projectName}
          sx={{ m: 2 }}
          onChange={(e) => setProjectName(e.target.value)}
          required
          slotProps={{
            input: {
              "aria-label": "Project Name",
            },
          }}
        />
        <TextField
          fullWidth
          label="Project Details"
          variant="outlined"
          value={projectDetails}
          sx={{ m: 2 }}
          onChange={(e) => setProjectDetails(e.target.value)}
          required
          multiline
          rows={4}
          slotProps={{
            input: {
              "aria-label": "Project Details",
            },
          }}
        />
        <FormControl fullWidth sx={{ mt: 2, m: 2 }}>
          <InputLabel id="project-status-label">Project Status</InputLabel>
          <Select
            labelId="project-status-label"
            value={projectStatus}
            onChange={(e) => setProjectStatus(e.target.value)}
            label="Project Status"
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <TextField
            fullWidth
            // label="Start Date"
            variant="outlined"
            type="date"
            value={startDate}
            sx={{ m: 2 }}
            onChange={(e) => setStartDate(e.target.value)}
            required
            slotProps={{
              input: {
                "aria-label": "Start Date",
              },
            }}
          />
          <TextField
            fullWidth
            // label="End Date"
            variant="outlined"
            type="date"
            value={endDate}
            sx={{ m: 2 }}
            onChange={(e) => setEndDate(e.target.value)}
            required
            slotProps={{
              input: {
                "aria-label": "End Date",
              },
            }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
          Create Project
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ m: 2 }}
          onClick={() => {
            toggleModal(false);
          }}
        >
          Close
        </Button>
      </form>
    </Box>
  );
};

export default CreateProjectPopup;
