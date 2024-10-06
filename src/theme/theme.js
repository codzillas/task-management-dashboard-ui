import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Custom font
  },
});
export default theme;
