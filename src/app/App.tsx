import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
// import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";

import ListAssignment from "../pages/ListAssignment/ListAssignment";
import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";
function App() {
  return (
    <Router>
      <MyListAssignment />
    </Router>
  );
}

export default App;
