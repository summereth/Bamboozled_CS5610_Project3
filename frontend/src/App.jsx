import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import CreateQuizScreen from "./screens/CreateQuizScreen.jsx";
import QuizScreen from "./screens/QuizScreen.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateQuizScreen />} />
          <Route path="/quiz/:id" element={<QuizScreen />} />
        </Routes>
      </main>
      <ToastContainer />
    </Router>
  );
}

export default App;
