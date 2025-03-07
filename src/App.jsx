import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/general" />} />
        <Route path="/:category" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
