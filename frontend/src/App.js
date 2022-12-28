import "./css/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;
