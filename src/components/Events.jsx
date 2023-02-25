import React from "react";

export const Events = () => {
  const handleLog = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>lets Event!</h1>
      <button onClick={handleLog}>Click me!</button>
    </>
  );
};
