import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/home">
          <h1>Início</h1>
        </NavLink>
        <NavLink to="/produtos">
          <h1>Produtos</h1>
        </NavLink>
        <NavLink to="/sobre">
          <h1>Sobre</h1>
        </NavLink>
      </nav>
    </>
  );
};
