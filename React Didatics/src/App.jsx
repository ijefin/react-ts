import React from "react";
import { ManageData } from "./components/ManageData";
import ManageListData from "./components/ManageListData";
import { ConditionalRender } from "./components/ConditionalRender";
import { PropsDestructuring } from "./components/PropsDestructuring";
import { Container } from "./components/Container";
import { FunctionByChild } from "./components/FunctionByChild";
import { Message } from "./components/Message";
import { useState } from "react";
import { HandleMessage } from "./components/HandleMessage";
import { StateLift } from "./components/StateLift";
import { LiftChange } from "./components/LiftChange";
import { UserDetails } from "./components/UserDetails";

export const App = () => {
  const data = [
    { nome: "jefferson", idade: 25, profissao: "Developer" },
    { nome: "Pedro", idade: 23, profissao: "Developer" },
    { nome: "Carlos", idade: 24, profissao: "Developer" },
    { nome: "João", idade: 26, profissao: "Developer" },
    { nome: "Fernando", idade: 27, profissao: "Developer" },
    { nome: "Alice", idade: 35, profissao: "Developer" },
    { nome: "Bruno", idade: 45, profissao: "Developer" },
    { nome: "Lucas", idade: 25, profissao: "Developer" },
    { nome: "Pablo", idade: 19, profissao: "Developer" },
    { nome: "Aline", idade: 23, profissao: "Developer" },
    { nome: "Anna", idade: 27, profissao: "Developer" },
  ];

  const [message, setMessage] = useState("");

  const handleChange = (msg) => {
    setMessage(msg);
  };

  const showLog = () => {
    console.log("Im showing myself!");
  };

  return (
    <>
      <h1>Avançando com React</h1>
      <p>Imagens Públicas</p>
      <img src="/skate.jpg" alt="" />
      <ManageData />
      <ManageListData />
      <ConditionalRender />
      {data.map((item, index) => (
        <PropsDestructuring
          key={index}
          nome={item.nome}
          idade={item.idade}
          profissao={item.profissao}
        />
      ))}
      <Container value={1}>
        <p>Im a children</p>
      </Container>
      <FunctionByChild parentFunction={showLog} />
      <Message msg={message} />
      <HandleMessage handleMessage={handleChange} />
      <StateLift messageToShow={message} />
      <LiftChange showFunc={handleChange} />
      <UserDetails />
    </>
  );
};
