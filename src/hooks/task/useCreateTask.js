import { useState } from "react";

const useCreateTask = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });

  const postTask = async (taskData) => {
    setLoading(true);
    setAlert({ message: "", severity: "" });

    try {
      const response = await fetch(`http://localhost:5001/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errorMsg);
      }

      setAlert({
        message: "Task created successfully!",
        severity: "success",
      });

      return { response };
    } catch (err) {
      console.error("Error posting task:", err);
      setAlert({ message: err.message, severity: "error" });
      return { errMsg: err.message };
    } finally {
      setLoading(false);
      // Automatically clear the alert after 2 seconds
      setTimeout(() => {
        setAlert({ message: "", severity: "" });
      }, 4000);
    }
  };

  return { postTask, loading, alert };
};

export default useCreateTask;
