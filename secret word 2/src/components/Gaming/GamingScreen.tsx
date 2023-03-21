import "./GamingScreen.css"

export const GamingScreen = ({ verifyLetter }: any) => {
    return (
        <div className="main-menu-container">
            <h1>Gaming</h1>
            <button className="play-button" onClick={verifyLetter}>Finalizar</button>
        </div>
    )
}
