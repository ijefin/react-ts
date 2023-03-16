import { Button } from "../Button/Button"
import { LetterCard } from "../LetterCard/LetterCard"
import "./Game.css"

export const Game = ({ secretWord, handleFinish }: any) => {
    return (
        <>
            <div className="main-title">
                {secretWord.map((item: string) => (
                    <div style={{ display: "inline-grid" }}>
                        <LetterCard letter={item} />
                    </div>
                ))}

            </div>
            <Button text="Finalizar" handleFunc={handleFinish} />
        </>
    )
}
