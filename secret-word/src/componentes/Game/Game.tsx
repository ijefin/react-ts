import { Button } from "../Button/Button"
import { LetterCard } from "../LetterCard/LetterCard"
import "./Game.css"

export const Game = ({ secretWord, handleFinish }: any) => {
    return (
        <>
            <div className="main-title">
                <p className="points">
                    <span>Pontuação: { }</span>
                </p>
                <h1>Adivinhe a palavra!</h1>
                <h3>Dica: { }</h3>
                {secretWord.map((item: string) => (
                    <div style={{ display: "inline-grid" }}>
                        <LetterCard letter={item} />
                    </div>
                ))}
                <form action="">
                    <label>
                        <input type="text" />
                        <button>Jogar</button>
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
