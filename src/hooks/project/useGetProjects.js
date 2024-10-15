import React from "react";
import { BASE_URL } from "../../constants/Constants";
import fetchDataFromAPI from "../../util/fetchDataFromAPI";

const useGetProjects = () => {
  const [apiData, setApiData] = React.useState(null);
  const getProjects = async () => {
    const apiUrl = `${BASE_URL}/api/projects`;
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
