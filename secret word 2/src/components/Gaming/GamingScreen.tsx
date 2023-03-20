import { SetStateAction, useState } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"

export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [inputed, setInputed] = useState(String)
  const [inputedList, setInputedList] = useState(Array<string>)
  const [alreadyPlayedLetters, setAlreadyPlayedLetters]: any = useState([])

  const validateInput = () => {
    if (inputed.length < 1) {
      return
    }
  }

  const handleSaveInputed = (e: any) => {
    validateInput()
    e.preventDefault()
    if (secretWord?.includes(inputed)) {
      setInputedList([...inputedList, inputed.toLowerCase()])
    } else {
      setAlreadyPlayedLetters([...alreadyPlayedLetters, inputed])
    }
    setInputed("")
  }

  const handleInputed = (e: any) => {
    setInputed(e.target.value)
  }

  const handleAlredyInputed = () => {
    const alredyInputed = inputedList.find((letter) => console.log(letter))
    return
  }

  const handleShowOrNot: any = (letter: string, index: number) => {
    if (inputedList.includes(letter)) {
      return <h1 key={index} className="letter">{letter}</h1>
    } else {
      return <span key={index} className="blank"></span>
    }
  }

  console.log(secretWord)

  return (
    <div>
      <h1>
        Adivinhe a palavra!
      </h1>
      <h2>Dica: {tip}</h2>
      <div className="letters-container">
        {
          secretWord?.map((letter: string, index: number) => (
            handleShowOrNot(letter, index)
          ))
        }
      </div>
      <label htmlFor="">
        <input value={inputed} onChange={handleInputed} type="text" minLength={1} maxLength={1} placeholder="Digite uma letra" />
        <button onClick={handleSaveInputed}>OK</button>
      </label>
      <div>
        <Button handleFunc={func} text="Iniciar" />
      </div>
      <h5>Letras jogadas: {alreadyPlayedLetters + " "}</h5>
    </div>
  )
}
