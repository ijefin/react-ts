import { useState } from "react"
import { Button } from "../Button/Button"
import { LetterCard } from "../LetterCard/LetterCard"
import "./Game.css"

export const Game = ({ secretWord, handleFinish, tip }: any) => {

    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState("")

    const handleSave = (e: any) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    const handleSaveValue = (e: any) => {
        e.preventDefault()
        setValue(inputValue)
    }
    return (
        <>
            <div className="main-title">
                <p className="points">
                    <span>Pontuação: { }</span>
                </p>
                <h1>Adivinhe a palavra!</h1>
                <h3>Dica: {tip}</h3>
                {secretWord.map((item: string, index: number) => (
                    <div key={index} style={{ display: "inline-flex" }}>
                        <LetterCard letter={item.includes(inputValue) ? value : <div></div>} />
                    </div>
                ))}
                <form>
                    <label>
                        <input onChange={handleSave} className="game-input" type="text" maxLength={1} />
                        <button onClick={handleSaveValue} className="game-handler">OK</button>
                    </label>
                </form>
                <div className="wrong-letters">
                    letras erradas
                </div>

            </div>
            <Button text="Finalizar" handleFunc={handleFinish} />
        </>
    )
}
