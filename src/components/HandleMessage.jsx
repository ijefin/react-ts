import React from "react";

export const HandleMessage = ({ handleMessage }) => {
  const messages = [
    "Olá, sou a primeira",
    "Olá, sou a segunda!",
    "Olá! Eu sou a terceira!",
  ];

  return (
    <>
      <button
        onClick={() => {
          handleMessage(messages[0]);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleMessage(messages[1]);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleMessage(messages[2]);
        }}
      >
        3
      </button>
    </>
  );
};
