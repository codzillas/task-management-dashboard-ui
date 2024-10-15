import React, { useCallback } from "react";
import fetchDataFromAPI from "../../util/fetchDataFromAPI";
import axiosInstance from "../../axios/axios";
const useCreateSection = () => {
  const [apiData, setApiData] = React.useState(null);
  const createSection = useCallback(async ({ projectId, sectionName }) => {
    const apiUrl = `http://localhost:5001/api/project/${projectId}/sections`;
    const data = await axiosInstance.post(apiUrl, { sectionName });
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  }, []);

  return { apiData, createSection };
};

export default useCreateSection;
