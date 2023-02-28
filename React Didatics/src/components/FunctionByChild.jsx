import React from "react";

export const FunctionByChild = ({ parentFunction }) => {
  return (
    <>
      <button onClick={parentFunction}>
        Click to execute the parent function
      </button>
    </>
  );
};
