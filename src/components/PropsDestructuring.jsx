import React from "react";

export const PropsDestructuring = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <li>Meu nome é: {nome}</li>
        <li>Minha idade é: {idade}</li>
        <li>Minha profissão é: {profissao}</li>
      </ul>
    </div>
  );
};

export default PropsDestructuring;
