import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="align-center">
      <h1>Não encontrado.</h1>
      <Link to="/home">Voltar a página inicial</Link>
    </div>
  );
};
