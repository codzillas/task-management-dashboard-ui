import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#ffffff", // White color
    },
  },
});

const Login = () => {
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
        `http://localhost:5001/api/auth/login?email=${email}&password=${password}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful, token:", data.token);
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "secondary.main",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Login
          </Typography>
          {errorMessage && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
