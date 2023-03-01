import React from "react";

export const PropsDestructuring = ({ nome, idade, cpf }) => {
  return (
    <div>
      <h1>PropsDestructuring</h1>
      <ul>
        <li>Meu nome é: {nome}</li>
        <li>Minha idade {idade}</li>
        <li>Meu cpf é: {cpf}</li>
      </ul>
    </div>
  );
};

export default PropsDestructuring;
