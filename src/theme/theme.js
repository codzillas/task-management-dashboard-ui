import { createTheme } from "@mui/material/styles";
import themeColors from "./ThemeColors";

// Creating MUI Theme using the colors from themeColors.js
const theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary, // Main primary color (header, buttons, etc.)
    },
    secondary: {
      main: themeColors.secondary, // Secondary color (subheader 1, title)
    },
    success: {
      main: themeColors.success, // Success color (e.g., for success messages)
    },
    warning: {
      main: themeColors.warning, // Warning color (e.g., for warnings or errors)
    },
    error: {
      main: themeColors.error, // Error color
    },
    info: {
      main: themeColors.info, // Info color (used for informational areas)
    },
    background: {
      default: themeColors.background, // General background color for the entire app
      paper: themeColors.sectionBackground, // Background for paper elements, sections like Subheader 2
    },
    text: {
      primary: themeColors.textPrimary, // Primary text color (black for contrast)
      secondary: themeColors.basicwhite, // Secondary text color (white)
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      textTransform: "none", // To avoid uppercase transformation for buttons
    },
  },
});

export default theme;
