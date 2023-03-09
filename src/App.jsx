import React from "react";
import { ManageData } from "./components/ManageData";
import ManageListData from "./components/ManageListData";
import { ConditionalRender } from "./components/ConditionalRender";
import { PropsComponent } from "./components/PropsComponent";

export const App = () => {
  return (
    <>
      <h1>Avançando com React</h1>
      <p>Imagens Públicas</p>
      <img src="/skate.jpg" alt="" />
      <ManageData />
      <ManageListData />
      <ConditionalRender />
      <PropsComponent name="Jeff" />
    </>
  );
};
