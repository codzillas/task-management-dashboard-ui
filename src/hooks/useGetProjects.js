import React from "react";
import fetchDataFromAPI from "../util/fetchDataFromAPI";

const useGetProjects = () => {
  const [apiData, setApiData] = React.useState(null);
  const getProjects = async () => {
    const apiUrl = "http://localhost:5001/api/projects";
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  };

  return { apiData, getProjects };
};

export default useGetProjects;
