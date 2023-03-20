import { useState, useRef } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"

export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [inputed, setInputed] = useState("a")
  const [correctLetterList, setCorrectLetterList] = useState(Array<string>)
  const [wrongLettersList, setWrongLettersList] = useState(Array<string>)
  const [alreadyPlayedLetters, setAlreadyPlayedLetters]: any = useState([])
  const letterInputRef: any = useRef()

  const handleSaveInputed = (e: any) => {
    e.preventDefault()
    handleWrongLetters()
    setInputed("")
    letterInputRef.current.focus()
  }

  const handleWrongLetters = () => {
    if (!secretWord?.includes(inputed)) {
      setWrongLettersList([...wrongLettersList, inputed.toLowerCase()])
    } else {
      setCorrectLetterList([...correctLetterList, inputed.toLowerCase()])
    }
  }

  console.log("correct:", correctLetterList, "wrong:", wrongLettersList)

  const verifyIfLetterWasAlredyUsed = () => {
    correctLetterList.includes(inputed.toLowerCase())
    return
  }

  const handleInputed = (e: any) => {
    setInputed(e.target.value)
  }

  const handleShowOrNot: any = (letter: string, index: number) => {
    if (correctLetterList.includes(letter)) {
      return <h1 key={index} className="letter">{letter}</h1>
    } else {
      return <span key={index} className="blank"></span>
    }
  }

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
        <input ref={letterInputRef} value={inputed} onChange={handleInputed} type="text" maxLength={1} placeholder="Digite uma letra" />
        <button onClick={handleSaveInputed}>OK</button>
      </label>
      <div>
        <Button handleFunc={func} text="Iniciar" />
      </div>
      <p>Letras jogadas:</p>
      {wrongLettersList.map((letter, index) => <span key={index}>{letter} </span>)}
    </div >
  )
}
