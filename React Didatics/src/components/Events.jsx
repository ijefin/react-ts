import React from "react";
import { render } from "react-dom";

export const Events = () => {
  const handleLog = (e) => {
    console.log(e);
  };

  const rendering = (x) => {
    if (x) {
      return <h1>Sim, sou verdadeiro xd</h1>;
    } else {
      return <h1>Negativo capitão broxa, sou falso!</h1>;
    }
  };

  return (
    <>
      <h1>lets Event!</h1>
      <button onClick={handleLog}>Click me!</button>
      <button onClick={() => console.log("Também funciono :3")}>
        Click me!
      </button>

      {rendering(true)}
      {rendering(false)}
    </>
  );
};
