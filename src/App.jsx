import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import "./css/App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/general" />} />
          <Route path="/:category" element={<News />} />
          <Route path="/search/:searchQuery" element={<News />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
