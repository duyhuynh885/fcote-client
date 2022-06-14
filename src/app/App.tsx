import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

// import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";

// import ListAssignment from "../pages/ListAssignment/ListAssignment";
// import MyListAssignment from "../pages/MyListAssignment/MyListAssignment";
import CreateAssignment from "../components/Assignment/CreateAssignment";
import Test from "../components/Assignment/test";
import DetailAssignment from "../pages/DetailAssignment";
import CreateIDE from "../components/Assignment/CreateIDE";
import IDE from "../components/Assignment/IDE/IDE";
import TaskbarFilter from "../components/Assignment/TaskbarFilter/TaskbarFilter";
function App() {
  return (
    <Router>
      <DetailAssignment />
    </Router>
  );
}

export default App;
