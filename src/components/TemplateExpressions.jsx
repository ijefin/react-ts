import React from "react";
import { MyUsefullComponent } from "./MyUsefullComponent";

export const TemplateExpressions = () => {
  const name = "Jeff";
  const data = {
    age: 25,
    job: "Software Engenieer",
  };

  const { age, job } = data;

  return (
    <>
      <h1>Olá {name}</h1>
      <h2>Você atua como {job}</h2>
      <h2>Sua idade é {age} anos</h2>
      <MyUsefullComponent />
    </>
  );
};
