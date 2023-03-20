import { useEffect, useState, useRef } from "react"
import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen.css"
import { toast } from 'react-toastify';


export const GamingScreen = ({ func, tip, secretWord }: Screens) => {

  const [letter, setletter] = useState("")
  const [guessedLetters, setGuessedLetters] = useState(Array<string>)
  const [wrongLetters, setwrongLetters] = useState(Array<string>)
  const letterRef: any = useRef(null)


  const handleSaveInputed = (e: any) => {
    e.preventDefault()
    verifyLetter()
    setletter("")

    letterRef.current.focus()
  }

  const handleInputed = (e: any) => {
    setletter(e.target.value)
  }

  const verifyLetter = () => {

    if (letter.length < 1) {
      toast.error("Insira uma letra")
      return
    }

    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      toast.error("Letra já jogada")
      return
    }
    if (secretWord?.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    } else {
      setwrongLetters([...wrongLetters, letter])
    }
  }

  return (
    <>
      <div>
        <h1>
          Adivinhe a palavra!
        </h1>
        <h2>Dica: {tip}</h2>
        <p>Tentativas: </p>
        <div className="letters-container">
          {
            secretWord?.map((letter, index) => (
              guessedLetters.includes(letter) ? <h1 key={index} className="letter">{letter}</h1> :
                <span key={index} className="blank"></span>
            ))
          }
        </div>
        <label>
          <input ref={letterRef} maxLength={1} value={letter} onChange={handleInputed} type="text" placeholder="Digite uma letra" />
          <button onClick={handleSaveInputed}>OK</button>
        </label>
        <div>
          <Button handleFunc={func} text="Iniciar" />
        </div>
        <div className="playedLetters">
          <p>Letras erradas: {wrongLetters.map((letter, index) => <span key={index} >{letter}, </span>)}</p>
        </div>
      </div>
    </>
  )
}