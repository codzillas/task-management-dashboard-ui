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

const CreateTaskPopup = ({ toggleModal }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
      task_name: taskName,
      task_details: taskDetails,
      task_status: taskStatus,
      start_date: startDate,
      end_date: endDate,
    });
    console.log("response", response);
    if (response?.ok) {
      setAlert({
        message: "Task created successfully!",
        severity: "success",
      });
      // Reset fields
      setTaskName("");
      setTaskDetails("");
      setTaskStatus("Pending");
      setStartDate("");
      setEndDate("");
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

  return (
    <Box sx={{ padding: 2 }}>
      {alert && <Alert severity={alert.severity}>{alert.message}</Alert>}
      <form onSubmit={handleSubmit}>
        <Autocomplete
          disablePortal
          options={userProjects.map((p) => p.project_name)}
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
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            label="Task Priority"
            required
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
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
