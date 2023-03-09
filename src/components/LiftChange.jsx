import React from "react";

export const LiftChange = ({ showFunc }) => {
  const messages = [
    "Ah, aprendeu né parceiro",
    "Mandou muito mano!",
    "Ce tem que fazer isso todo dia cara!",
  ];

  return (
    <>
      <button
        onClick={() => {
          showFunc(messages[0]);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          showFunc(messages[1]);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          showFunc(messages[2]);
        }}
      >
        3
      </button>
    </>
  );
};
