import { useState } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"

export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [inputed, setInputed] = useState("")
  const [inputedList, setInputedList] = useState(Array<string>)

  const handleSaveInputed = (e: any) => {
    e.preventDefault()
    setInputedList([...inputedList, inputed.toLowerCase()])
    setInputed("")
  }

  const handleInputed = (e: any) => {
    setInputed(e.target.value)
  }

  console.log(inputedList)

  return (
    <>
      <div>
        <h1>
          Adivinhe a palavra!
        </h1>
        <h2>Dica: {tip}</h2>
        <div className="letters-container">

          {
            secretWord?.map((letter, index) => (
              inputedList.includes(letter) ? <h1 key={index} className="letter">{letter}</h1> :
                <span key={index} className="blank"></span>
            ))
          }
        </div>
        <label htmlFor="">
          <input value={inputed} onChange={handleInputed} type="text" placeholder="Digite uma letra" />
          <button onClick={handleSaveInputed}>OK</button>
        </label>
        <div>
          <Button handleFunc={func} text="Iniciar" />
        </div>
      </div>
    </>
  )
}
