import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navigate} from "react-router-dom";
import theme from "../../theme/theme";
import useRegisterHook from "./useRegisterHook";

const Register = () => {
  const registerHook = useRegisterHook();

  if (registerHook.redirect) {
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
          {registerHook.error && (
            <Typography color="error">{registerHook.error}</Typography>
          )}
          <form onSubmit={registerHook.handleSignUp} style={{ width: "100%" }}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              variant="outlined"
              value={registerHook.firstName}
              onChange={(e) => registerHook.setFirstName(e.target.value)}
              required
              error={!registerHook.firstName && registerHook.error}
              helperText={
                !registerHook.firstName && registerHook.error ? "Required" : ""
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              variant="outlined"
              value={registerHook.lastName}
              onChange={(e) => registerHook.setLastName(e.target.value)}
              required
              error={!registerHook.lastName && registerHook.error}
              helperText={
                !registerHook.lastName && registerHook.error ? "Required" : ""
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={registerHook.email}
              onChange={(e) => registerHook.setEmail(e.target.value)}
              required
              type="email"
              error={!registerHook.email && registerHook.error}
              helperText={
                !registerHook.email && registerHook.error ? "Required" : ""
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              value={registerHook.password}
              onChange={(e) => registerHook.setPassword(e.target.value)}
              required
              type="password"
              error={!registerHook.password && registerHook.error}
              helperText={
                !registerHook.password && registerHook.error ? "Required" : ""
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              variant="outlined"
              value={registerHook.confirmPassword}
              onChange={(e) => registerHook.setConfirmPassword(e.target.value)}
              required
              type="password"
              error={!registerHook.confirmPassword && registerHook.error}
              helperText={
                !registerHook.confirmPassword && registerHook.error
                  ? "Required"
                  : ""
              }
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
