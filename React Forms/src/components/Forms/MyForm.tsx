import { useState } from "react";
import "./MyForm.css"

export const MyForm = () => {

  const [data, setData] = useState("")

  // const handleData = (e: any) => {
  //   setData(e.target.value)
  // }

  return (
    <>
      <form >
        <label>
          <span>Email:</span>
          <input onChange={(e) => setData(e.target.value)} type="email" />
          <h1>{data}</h1>
          <span>Password:</span>
          <input type="password" onChange={(e) => setData(e.target.value)} />
        </label>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};
