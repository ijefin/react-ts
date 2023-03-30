import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Navbar } from "./componentes/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
