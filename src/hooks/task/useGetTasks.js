import React from "react";
import fetchDataFromAPI from "../../util/fetchDataFromAPI";
import { BASE_URL } from "../../constants/Constants";

const useGetTasks = () => {
  const [apiData, setApiData] = React.useState(null);
  const getTasks = React.useCallback(async () => {
    const apiUrl = `${BASE_URL}/api/tasks`;
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  }, []);

  return { apiData, getTasks };
};

export default useGetTasks;
