import { useState } from "react";
import "./MyForm.css"

export const MyForm = () => {

  const [email, setData] = useState("")
  const [pass, setPass] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    setTimeout(() => {
      setMessage("Formulário enviado com sucesso!")
    }, 2000);
  }

  return (
    <>
      <form >
        <label>
          <span>Email:</span>
          <input onChange={(e) => setData(e.target.value)} type="email" />
          <h1>{message}</h1>
          <span>Password:</span>
          <input type="password" onChange={(e) => setPass(e.target.value)} />
        </label>
        <input type="submit" onClick={handleSubmit} value="Send" />
      </form>
    </>
  );
};
