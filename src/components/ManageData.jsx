import React from "react";
import { useState } from "react";

export const ManageData = () => {
  const valor = 10;
  const [newValue, setNewValue] = useState(15);

  const handleSum = () => {
    setNewValue(newValue + 1);
  };

  return (
    <>
      <h1>Valor: {valor}</h1>
      <h1>Valor: {newValue}</h1>
      <button onClick={handleSum}>Bora</button>
    </>
  );
};

export default ManageData;
