import React from "react";
import fetchDataFromAPI from "../util/fetchDataFromAPI";

const useGetTasks = () => {
  const [apiData, setApiData] = React.useState(null);
  const getTasks = async () => {
    const apiUrl = "http://localhost:5001/api/tasks";
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  };

  return { apiData, getTasks };
};

export default useGetTasks;
