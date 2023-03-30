import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
      </nav>
    </>
  );
};
