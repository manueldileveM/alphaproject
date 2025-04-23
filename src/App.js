import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Main from "./components/Main"; // ✅ Usiamo Main che include BookingPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Reservations" element={<Main />} />
    </Routes>
  );
}

export default App;

