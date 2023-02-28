import React, { useState } from "react";

const ManageListData = () => {
  const [list] = useState(["primeiro", "segundo", "terceiro"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Jeff", job: "Developer" },
    { id: 2, name: "Carlo", job: "Developer" },
    { id: 3, name: "Pedro", job: "Developer" },
    { id: 4, name: "Jona", job: "Developer" },
    { id: 5, name: "Miguel", job: "Developer" },
    { id: 6, name: "Alfred", job: "Developer" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <h1>Teste</h1>
      <div>
        {
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
      </div>
      <div>
        {users.map((data) => (
          <li key={data.id}>
            {data.name}, {data.job}
          </li>
        ))}
      </div>

      <button onClick={deleteRandom}>Delete random</button>
    </>
  );
};

export default ManageListData;
