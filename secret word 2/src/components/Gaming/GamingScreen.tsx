import { useState, useRef } from "react"
import "./GamingScreen.css"

export const GamingScreen = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    guesses,
    letters,
    score,
    guessedLetters,
    wrongLetters
}: any) => {

    const [letter, setLetter] = useState("")
    const letterInput: any = useRef(null)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        verifyLetter(letter.toLowerCase())
        setLetter("")
        letterInput.current.focus()
    }

    return (
        <div className="main-menu-container">
            <div className="points">
                <span>Pontuação: {score}</span>
            </div>
            <p>Tentativas restantes: {guesses}</p>
            <h4>Dica: <span className="tip">{pickedCategory}</span></h4>
            <div className="letters-container">
                {letters.map((letter: string, index: number) => (
                    guessedLetters.includes(letter) ?
                        <span key={index} className="letter">{letter}</span> :
                        <span className="blank"></span>
                ))}
            </div>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <input ref={letterInput} value={letter} onChange={(e) => setLetter(e.target.value)} required name="letter" maxLength={1} type="text" />
                    <button className="form-button">OK</button>
                </form>
            </div>
            <div className="wrongLetters">
                <p>Letras erradas: {wrongLetters.map((letter: string, index: number) => <span key={index} >{`${letter},`} </span>)}</p>
            </div>
        </div >
    )
}
