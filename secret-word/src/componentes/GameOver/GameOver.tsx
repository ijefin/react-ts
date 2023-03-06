import "./GameOver.css"

const GameOver = ({ handleInit }: any) => {
    return (
        <>
            <h1>GameOver</h1>
            <button onClick={handleInit}>Menu</button>
        </>
    )
}

export default GameOver