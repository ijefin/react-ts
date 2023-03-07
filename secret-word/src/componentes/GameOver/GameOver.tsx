import { Button } from "../Button/Button"
import "./GameOver.css"

const GameOver = ({ handleInit }: any) => {
    return (
        <>
            <div className="main-title">
                <h1>Game Over</h1>
                <Button text="Menu" handleFunc={handleInit} />
            </div>
        </>
    )
}

export default GameOver