import React from "react";

export const Container = ({ children, value }) => {
  return (
    <>
      <h1>Im a children prop</h1>
      {children}
      <p>that's my {value}</p>
    </>
  );
};
