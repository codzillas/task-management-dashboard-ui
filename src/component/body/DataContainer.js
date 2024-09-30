import React from "react";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

// Responsive container styled to adjust based on sidebar visibility
const Container = styled(Box)(({ theme, isOpen }) => ({
  marginLeft: isOpen ? 240 : 0, // Adjust based on sidebar width
  transition: "margin-left 0.3s ease",
  padding: theme.spacing(3),
  width: isOpen ? `calc(100% - 240px)` : "100%", // Responsive width based on sidebar state
  [theme.breakpoints.down("sm")]: {
    marginLeft: isOpen ? 180 : 0,
    width: isOpen ? `calc(100% - 180px)` : "100%", // Adjust for smaller screens
  },
}));

const DataContainer = ({ isOpen, selectedItem }) => {
  return (
    <Container isOpen={isOpen}>
      <Card></Card>
      {/* <Typography variant="h4" component="h2">
        {selectedItem
          ? selectedItem
          : "Please select an option from the sidebar."}
      </Typography>
      <Typography variant="body1">
        This is the content area for the selected item: {selectedItem}
      </Typography> */}
    </Container>
  );
};

export default DataContainer;
