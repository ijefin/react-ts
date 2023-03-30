import React from "react";
import { useParams } from "react-router-dom";

export const Info = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Aqui você vê informações do produto {id}</h1>
    </div>
  );
};
