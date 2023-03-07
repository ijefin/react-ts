import { Button } from "../Button/Button"
import "./Game.css"

export const Game = ({ handleFinish }: any) => {
    return (
        <>
            <div className="main-title">
                <h1>Game</h1>
                <Button text="Finalizar" handleFunc={handleFinish} />
            </div>
        </>
    )
}
