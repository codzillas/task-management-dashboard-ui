import { useCallback, useState } from "react";
import axiosInstance from "../../axios/axios"; // Ensure axiosInstance is properly configured for your API

const useUpdateTask = () => {
  const [apiData, setApiData] = useState(null); // To store the updated task response
  const [error, setError] = useState(null); // To handle errors

  // Function to update a task
  const updateTask = useCallback(
    async ({ taskId, name, details, status, priority, sectionId }) => {
      try {
        // Construct API URL
        const apiUrl = `http://localhost:5001/api/task/${taskId}`;

        // Prepare the data to be sent in the request body (only the fields that are provided)
        const updateFields = {};
        if (name !== undefined) updateFields.name = name;
        if (details !== undefined) updateFields.details = details;
        if (status !== undefined) updateFields.status = status;
        if (priority !== undefined) updateFields.priority = priority;
        if (sectionId !== undefined) updateFields.sectionId = sectionId;

        // Check if there's anything to update
        if (Object.keys(updateFields).length === 0) {
          throw new Error("No fields provided to update.");
        }

        // Make the PUT request to update the task
        const resp = await axiosInstance.put(apiUrl, updateFields);
        // Update the state with the response
        setApiData(resp);
      } catch (err) {
        console.error("Error updating task:", err);
        setError(err.message || "Failed to update task");
      }
    },
    []
  );

  return { apiData, updateTask, error };
};

export default useUpdateTask;
