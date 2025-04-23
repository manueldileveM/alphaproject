import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./components/BookingPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Reservations" element={<BookingPage />} />
      </Routes>
  );
}

export default App;

