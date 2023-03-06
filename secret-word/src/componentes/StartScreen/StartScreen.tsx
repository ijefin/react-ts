import { Button } from "../Button/Button"
import "./StartScreen.css"

export const StartScreen = ({ set }: any) => {
    return (
        <>
            <div className="main-title">
                <h1>Secret Word!</h1>
                <p>Excelente didática para fortalecer seu vocabulário e também a memória.</p>
                <p>Clique no botão para jogar!</p>
                <Button handleFunc={set} />
            </div>
        </>
    )
}
