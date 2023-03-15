import { Button } from "../Button/Button"
import "./Game.css"

export const Game = ({ secretWord, handleFinish }: any) => {
    return (
        <>
            <div className="main-title">
                {secretWord.map((item: string) => (<h1>{item}</h1>))}
                <Button text="Finalizar" handleFunc={handleFinish} />
            </div>
        </>
    )
}
