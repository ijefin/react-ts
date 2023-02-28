import React from "react";

export const Challenge = () => {
  const values = {
    a: 1,
    b: 5,
  };

  const soma = (a, b) => {
    console.log(a + b);
  };

  return (
    <>
      <h1>Primeiro valor {values.a}</h1>
      <h1>Segundo valor {values.b}</h1>
      <button onClick={() => soma(values.a, values.b)}>Sum</button>
    </>
  );
};
