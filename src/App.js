import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Layout from "./Layout";
import PathRouter from "./router";

const App = () => {
  return (
    <Router>
      <PathRouter />
    </Router>
  );
};

export default App;
