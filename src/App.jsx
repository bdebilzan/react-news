import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/general" />} />
        <Route path="/:category" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
