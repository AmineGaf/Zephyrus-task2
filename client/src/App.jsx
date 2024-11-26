import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ExternalTasks from "./components/ExternalTasks";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/externel-tasks" element={<ExternalTasks />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
