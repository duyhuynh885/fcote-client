import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";
// import AssignmentItem from "../components/Assignment/AssignmentItem/AssignmentItem";
// import ListAssignment from "../pages/ListAssignment/ListAssignment";
function App() {
  return (
    <Router>
      <MyListAssignment />
    </Router>
  );
}

export default App;
