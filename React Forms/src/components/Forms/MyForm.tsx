import { useState } from "react";
import "./MyForm.css"

export const MyForm = ({ user }: any) => {

  const [email, setData] = useState(user ? user.email : "")
  const [pass, setPass] = useState(user ? user.pass : "")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setTimeout(() => {
      setMessage(("Formulário enviado com sucesso!"))
    }, 2000)

    setTimeout(() => {
      setMessage((""))
    }, 5000)
  }

  console.log(email);
  console.log(pass);
  console.log(role);

  return (
    <>
      <form >
        <label>
          <h1 style={{ color: "green" }}>{message}</h1>
          <span>Email:</span>
          <input name="email" onChange={(e) => setData(e.target.value)} type="email" value={email} />
          <span>Password:</span>
          <input name="pass" type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
        </label>

        <label>
          <span>Select one function</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="leader">Leader</option>
            <option value="technician">technician</option>
          </select>

        </label>

        <input type="submit" onClick={handleSubmit} value="Send" />
      </form>
    </>
  );
};
