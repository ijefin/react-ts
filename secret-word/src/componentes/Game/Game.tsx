import "./Game.css"

export const Game = ({ handleFinish }: any) => {
    return (
        <>
            <h1>Game</h1>
            <button onClick={handleFinish}>Finalizar Jogo</button>
        </>
    )
}
