import React, { useState } from "react";

export const ConditionalRender = () => {
  const [x, setX] = useState(true);

  return (
    <>
      <h1>Isto será exibido?</h1>
      {x ? <p>Sim, X é true!</p> : <p>ops</p>}
    </>
  );
};

export default ConditionalRender;
