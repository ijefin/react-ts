import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import { Navbar } from "./components/Navbar/Navbar";

//views
import { Sobre } from "./views/Sobre/Sobre";
import { Produtos } from "./views/Produtos/Produtos";
import { Home } from "./views/Home/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
