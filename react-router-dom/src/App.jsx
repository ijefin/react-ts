import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Product } from "./pages/Product/Product";
import { Info } from "./pages/Info/Info";
import { NotFound } from "./pages/404/NotFound";
import { Search } from "./componentes/Search/Search";
import { SearchPage } from "./pages/SearchPage/SearchPage";

export const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
