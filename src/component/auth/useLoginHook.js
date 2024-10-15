import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";

function useLoginHook() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    try {
      // API call for login
      const response = await fetch(
        `${BASE_URL}/api/auth/login?email=${email}&password=${password}`
      );

      if (response.ok) {
        const data = await response.json();
        // Store token in localStorage or context (if needed)
        localStorage.setItem("token", data.token);
        // Navigate to home page after successful login
        navigate("/"); // Adjust this to your home route
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Set the error message to display
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  return { handleLogin, email, password, setPassword, errorMessage, setEmail };
}

export default useLoginHook;
