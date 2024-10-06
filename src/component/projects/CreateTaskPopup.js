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
  Autocomplete,
} from "@mui/material";
import usePostTask from "../../hooks/useCreateTask";
import useGetTasks from "../../hooks/useGetTasks";
import { AppContext } from "../../context/store";

const CreateTaskPopup = ({ toggleModal, defaultProjectDetails }) => {
  const [taskName, setTaskName] = useState("");
  const [selectedProjectDetails, setSelectedProjectDetails] = React.useState(
    defaultProjectDetails ?? {}
  );
  const [taskDetails, setTaskDetails] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [alert, setAlert] = useState(null);
  const { setUserTask } = React.useContext(AppContext);
  const { postTask } = usePostTask();
  const { apiData, getTasks } = useGetTasks();

  const { userProjects } = React.useContext(AppContext);
  React.useEffect(() => {
    if (apiData) {
      setUserTask(apiData);
    }
  }, [apiData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response, errMsg } = await postTask({
      name: taskName,
      details: taskDetails,
      status: taskStatus,
      priority: taskPriority,
      projectDetails: selectedProjectDetails,
    });
    if (response?.ok) {
      setAlert({
        message: "Task created successfully!",
        severity: "success",
      });
      // Reset fields
      setTaskName("");
      setTaskDetails("");
      setTaskStatus("Pending");
      setTimeout(() => {
        toggleModal(false);
      }, 1000);

      getTasks();
    } else {
      setAlert({ message: errMsg, severity: "error" });
    }

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleProjectSelection = (newValue) => {
    setSelectedProjectDetails(newValue);
    // setSelectedProjectName();
  };
  return (
    <Box sx={{ padding: 2 }}>
      {alert && <Alert severity={alert.severity}>{alert.message}</Alert>}
      <form onSubmit={handleSubmit}>
        <Autocomplete
          value={selectedProjectDetails}
          onChange={(event, newValue) => {
            handleProjectSelection(newValue);
          }}
          disablePortal
          options={userProjects} // Change this to userProjects to access the full object
          getOptionLabel={(option) => option.project_name} //
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Projects" />}
        />
        <TextField
          fullWidth
          label="Task Name"
          variant="outlined"
          value={taskName}
          sx={{ m: 2 }}
          onChange={(e) => setTaskName(e.target.value)}
          required
          slotProps={{
            input: {
              "aria-label": "Task Name",
            },
          }}
        />
        <TextField
          fullWidth
          label="Task Details"
          variant="outlined"
          value={taskDetails}
          sx={{ m: 2 }}
          onChange={(e) => setTaskDetails(e.target.value)}
          required
          multiline
          rows={4}
          slotProps={{
            input: {
              "aria-label": "Task Details",
            },
          }}
        />
        <FormControl fullWidth sx={{ mt: 2, m: 2 }}>
          <InputLabel id="task-status-label">Task Status</InputLabel>
          <Select
            labelId="task-status-label"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            label="Task Status"
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2, m: 2 }}>
          <InputLabel id="task-status-label">Task Status</InputLabel>
          <Select
            labelId="task-status-label"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            label="Task Priority"
            required
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
          Create Task
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

export default CreateTaskPopup;
