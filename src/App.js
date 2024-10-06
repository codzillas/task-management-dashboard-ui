import React from "react";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
