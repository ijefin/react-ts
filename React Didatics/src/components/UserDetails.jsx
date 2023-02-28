import React from "react";

export const UserDetails = () => {
  const users = [
    { nome: "Jefferson", idade: 23, profissao: "Dev" },
    { nome: "Izadora", idade: 14, profissao: "Nenhuma" },
    { nome: "Katarina", idade: 21, profissao: "Profissional do S" },
  ];

  return (
    <>
      <h1>Detalhes do usuário:</h1>
      <ul>
        {users.map(
          (users) =>
            users.idade >= 18 && (
              <li>
                {users.nome}, {users.idade}
              </li>
            )
        )}
      </ul>
    </>
  );
};
