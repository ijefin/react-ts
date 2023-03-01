import React from "react";
import { ManageData } from "./components/ManageData";
import ManageListData from "./components/ManageListData";
import { ConditionalRender } from "./components/ConditionalRender";
import { PropsDestructuring } from "./components/PropsDestructuring";

export const App = () => {
  return (
    <>
      <h1>Avançando com React</h1>
      <p>Imagens Públicas</p>
      <img src="/skate.jpg" alt="" />
      <ManageData />
      <ManageListData />
      <ConditionalRender />
      <PropsDestructuring nome="Jefferson" idade={23} cpf="11291152423" />
      <PropsDestructuring nome="Jefferson" idade={23} cpf="11291152423" />
      <PropsDestructuring nome="Jefferson" idade={23} cpf="11291152423" />
      <PropsDestructuring nome="Jefferson" idade={23} cpf="11291152423" />
    </>
  );
};
