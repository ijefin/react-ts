import React from "react";
import { ManageData } from "./components/ManageData";
import ManageListData from "./components/ManageListData";

export const App = () => {
  return (
    <>
      <h1>Avançando com React</h1>
      <p>Imagens Públicas</p>
      <img src="/skate.jpg" alt="" />
      <ManageData />
      <ManageListData />
    </>
  );
};
