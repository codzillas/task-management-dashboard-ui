import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";

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

const Register = () => {
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
      const response = await fetch("http://localhost:5001/api/auth/signup", {
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
        console.log("User registered successfully:", data);
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

  if (redirect) {
    return <Navigate to="/login" />;
  }

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
            Sign Up
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSignUp} style={{ width: "100%" }}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              error={!firstName && error}
              helperText={!firstName && error ? "Required" : ""}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              error={!lastName && error}
              helperText={!lastName && error ? "Required" : ""}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              error={!email && error}
              helperText={!email && error ? "Required" : ""}
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
              error={!password && error}
              helperText={!password && error ? "Required" : ""}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              error={!confirmPassword && error}
              helperText={!confirmPassword && error ? "Required" : ""}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
