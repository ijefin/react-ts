import { Button } from "../Button/Button"
import { LetterCard } from "../LetterCard/LetterCard"
import "./Game.css"

export const Game = ({ secretWord, handleFinish, tip }: any) => {
    return (
        <>
            <div className="main-title">
                <p className="points">
                    <span>Pontuação: { }</span>
                </p>
                <h1>Adivinhe a palavra!</h1>
                <h3>Dica: {tip}</h3>
                {secretWord.map((item: string) => (
                    <div style={{ display: "inline-grid" }}>
                        <LetterCard letter={item} />
                    </div>
                ))}
                <form>
                    <label>
                        <input className="game-input" type="text" maxLength={1} />
                        <button className="game-handler" type="submit">OK</button>
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
