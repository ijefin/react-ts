import "./EndScreen.css"

export const EndScreen = ({ menu, score, retry }: any) => {
    return (
        <div className="main-menu-container">
            <h1>Fim de jogo!</h1>
            <h3>Pontuação: {score}</h3>
            <button className="play-button" onClick={retry}>Jogar novamente!</button>
            <button className="play-button" onClick={menu}>Menu</button>
        </div>
    )
}
