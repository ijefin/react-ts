import { useState } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"

export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [letter, setletter] = useState("")
  const [guessedLetters, setGuessedLetters] = useState(Array<string>)
  const [wrongLetters, setwrongLetters] = useState(Array<string>)

  const handleSaveInputed = (e: any) => {
    e.preventDefault()
    verifyLetter()
    setletter("")
  }

  console.log("correct:", guessedLetters, "wrong:", wrongLetters)

  const handleInputed = (e: any) => {

    setletter(e.target.value)
  }

  const verifyLetter = () => {
    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      console.log("Você ja jogou essa letra")
    }

    secretWord?.includes(letter)
      ?
      setGuessedLetters([...guessedLetters, letter])
      : setwrongLetters([...wrongLetters, letter])
  }

  console.log(secretWord)
  console.log(letter)
  console.log(guessedLetters)

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
              guessedLetters.includes(letter) ? <h1 key={index} className="letter">{letter}</h1> :
                <span key={index} className="blank"></span>
            ))
          }
        </div>
        <label htmlFor="">
          <input value={letter} onChange={handleInputed} type="text" placeholder="Digite uma letra" />
          <button onClick={handleSaveInputed}>OK</button>
        </label>
        <div>
          <Button handleFunc={func} text="Iniciar" />
        </div>
      </div>
    </>
  )
}