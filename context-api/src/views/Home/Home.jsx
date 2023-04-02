import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleIncrement = () => {
    setCounter((counter) => (counter += 1));
  };

  return (
    <>
      <h1 className="align-center">Olá {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};
