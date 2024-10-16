import { useCallback, useState } from "react";
import { BASE_URL } from "../../constants/Constants";

const usePostProject = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });

  const postProject = useCallback(async (projectData) => {
    setLoading(true);
    setAlert({ message: "", severity: "" }); // Clear previous alerts

    try {
      const response = await fetch(`${BASE_URL}/api/projects`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errorMsg);
      }

      // const data = await response.json();
      setAlert({
        message: "Project created successfully!",
        severity: "success",
      });

      return { response };
    } catch (err) {
      console.error("Error posting project:", err);
      setAlert({ message: err.message, severity: "error" });
      return { errMsg: err.message };
    } finally {
      setLoading(false);
      // Automatically clear the alert after 2 seconds
      setTimeout(() => {
        setAlert({ message: "", severity: "" });
      }, 4000);
    }
  }, []);

  return { postProject, loading, alert };
};

export default usePostProject;
