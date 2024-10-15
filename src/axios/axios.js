import axios from "axios";

// Create an instance of axios with default configurations
const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // Set your base URL here
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here if needed
    // For example, add authorization headers:
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here if needed
    return response.data; // Return just the data
  },
  (error) => {
    // Handle response errors globally
    console.error("Error response:", error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
