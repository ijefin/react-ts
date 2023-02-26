import React, { useState } from "react";

const ManageListData = () => {
  const [list] = useState(["primeiro", "segundo", "terceiro"]);
  const [show, setShow] = useState(false);

  const handleShowList = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>Teste</h1>
      <button onClick={handleShowList}>Mostrar lista!</button>
      <div>
        {show ? (
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ManageListData;
