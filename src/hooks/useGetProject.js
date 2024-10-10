import React, { useCallback } from "react";
import fetchDataFromAPI from "../util/fetchDataFromAPI";

const useGetProject = () => {
  const [apiData, setApiData] = React.useState(null);
  const getProject = useCallback(async ({ projectId }) => {
    const apiUrl = `http://localhost:5001/api/project/${projectId}`;
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  }, []);

  return { apiData, getProject };
};

export default useGetProject;
