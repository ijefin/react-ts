import { useState } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"

export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [inputed, setInputed] = useState("")
  const [inputedList, setInputedList] = useState([""])

  const handleSaveInputed = (e: any) => {
    e.preventDefault()
    setInputedList([...inputedList, inputed.toLowerCase()])
  }

  const handleInputed = (e: any) => {
    setInputed(e.target.value)
  }

  console.log(inputed)

  return (
    <>
      <div>
        <h1>
          Adivinhe a palavra!
        </h1>
        <h2>Dica: {tip}</h2>
        <div className="letters-container">

          {
            secretWord?.map((i) => (
              inputedList.includes(i) ? <h1 className="letter">{i}</h1> :
                <span className="blank"></span>
            ))
          }
        </div>
        <label htmlFor="">
          <input onChange={handleInputed} type="text" placeholder="Digite uma letra" />
          <button onClick={handleSaveInputed}>OK</button>
        </label>
        <div>
          <Button handleFunc={func} text="Iniciar" />
        </div>
      </div>
    </>
  )
}
