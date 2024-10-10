import React from "react";
import fetchDataFromAPI from "../../util/fetchDataFromAPI";

const useGetUserDetails = () => {
  const [apiData, setApiData] = React.useState(null);
  const getUserDetails = async ({ userId }) => {
    const apiUrl = `http://localhost:5001/api/user/${userId}`;
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      setApiData(data);
    } else {
      console.log("Failed to fetch data or no data available.");
    }
  };

  return { apiData, getUserDetails };
};

export default useGetUserDetails;
