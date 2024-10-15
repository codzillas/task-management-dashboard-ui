import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";

function useRegisterHook() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // API call to sign up endpoint
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User registered successfully.");
        setRedirect(true); // Redirect to the login page
      } else {
        const errorData = await response.json();
        setError(`Sign up failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("Sign up failed. Please try again.");
    }
  };

  return {
    handleSignUp,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    redirect,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setError,
  };
}

export default useRegisterHook;
