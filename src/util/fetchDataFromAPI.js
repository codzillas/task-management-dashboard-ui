// Define the async function to fetch data
const fetchDataFromAPI = async (url) => {
  const token = localStorage.getItem("token");
  try {
    // Perform the API request
    const response = await fetch(url, { headers: { Authorization: token } });
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    // Convert the response into JSON format
    const data = await response.json();
    // Return the data to be used elsewhere
    return data;
  } catch (error) {
    // Handle errors (e.g., network issues, API errors)
    console.error("Failed to fetch data:", error.message);
    const errormessage = error.message;
    return errormessage; // or you can return a default value or an empty object
  }
};
export default fetchDataFromAPI;
