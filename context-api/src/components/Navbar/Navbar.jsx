import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Início</h1>
        </Link>
        <Link to="/produtos">
          <h1>Produtos</h1>
        </Link>
        <Link to="/sobre">
          <h1>Sobre</h1>
        </Link>
      </nav>
    </>
  );
};
