import "./EndScreen.css"

export const EndScreen = ({ menu }: any) => {
    return (
        <div className="main-menu-container">
            <h1>Fim</h1>
            <button className="play-button" onClick={menu}>Reiniciar</button>
        </div>
    )
}
