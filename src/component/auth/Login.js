import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import useLoginHook from "./useLoginHook";

const Login = () => {
  const loginHook = useLoginHook();
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
          {loginHook.errorMessage && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              {loginHook.errorMessage}
            </Typography>
          )}
          <form onSubmit={loginHook.handleLogin} style={{ width: "100%" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={loginHook.email}
              onChange={(e) => loginHook.setEmail(e.target.value)}
              required
              type="email"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              value={loginHook.password}
              onChange={(e) => loginHook.setPassword(e.target.value)}
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
