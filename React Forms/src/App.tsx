import "./App.css"
import { MyForm } from "./components/Forms/MyForm"

export const App = () => {
  return (
    <>
      <MyForm user={{ email: "Jeff", pass: "Saw50812@" }} />
    </>
  )
}
