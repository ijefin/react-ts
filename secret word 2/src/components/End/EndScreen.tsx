import "./EndScreen.css"

export const EndScreen = ({ pickedWord, menu, score, retry }: any) => {

    console.log(pickedWord)

    return (
        <div className="main-menu-container">
            <h1>Fim de jogo!</h1>
            <h3>Palavra: <span style={{ color: "green" }}>{pickedWord}</span></h3>
            <h3>Pontuação: {score}</h3>
            <button className="play-button" onClick={retry}>Jogar novamente!</button>
            <button className="play-button" onClick={menu}>Menu</button>
        </div>
    )
}
