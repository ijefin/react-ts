import "./StartScreen.css"

export const StartScreen = () => {
    return (
        <div className="main-menu-container">
            <h1 className="menu-title">Secret Word!</h1>
            <p>Clique no botão abaixo para iniciar.</p>
            <button className="play-button">Iniciar</button>
        </div>
    )
}
