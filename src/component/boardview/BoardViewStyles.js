import themeColors from "../../theme/ThemeColors";
import theme from "../../theme/theme";

export function boardViewStyles() {
  const mainSectionContainer = {
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  };
  const mainSectionContainer__Inner = {
    height: "100%",
    display: "flex",
    overflowX: "auto",
    backgroundColor: "#252628",
  };
  const mainSectionContainer__Inner_Inner = {
    height: "100%",
    flex: "0 0 24%",
    borderRight: "1px solid",
    boxSizing: "border-box",
    textAlign: "center",
    padding: 1,
    color: "white",
  };

  const sectionHeader = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    borderBottom: "1px solid #d3d3d3",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    color: "white",
    // background: themeColors.sectionHeaderBg,
    padding: 2,
  };

  const taskCard = {
    height: 200,
    m: 4,
    backgroundColor: theme.palette.secondary.main, // Light white for task boxes
    border: "1px solid #e0e0e0", // Light gray border
    p: 1, // Spacing inside the box
    borderRadius: 1, // Rounded corners for a modern look
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for floating effect
    color: "#212121", // Dark text color for readability
  };

  return {
    mainSectionContainer,
    mainSectionContainer__Inner,
    mainSectionContainer__Inner_Inner,
    sectionHeader,
    taskCard,
  };
}
