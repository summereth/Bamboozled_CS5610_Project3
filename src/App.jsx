import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import CreateQuizScreen from "./screens/CreateQuizScreen.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateQuizScreen />} />
          {/* Additional routes can be added here */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
