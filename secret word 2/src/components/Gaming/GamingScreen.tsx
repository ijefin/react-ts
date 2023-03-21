import "./GamingScreen.css"

export const GamingScreen = ({ verifyLetter }: any) => {
    return (
        <div className="main-menu-container">
            <div className="points">
                <span>Pontuação: 000</span>
            </div>
            <h4>Dica: <span className="tip">Computador</span></h4>
            <div className="letters-container">
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="letter">A</span>
                <span className="blank"></span>
            </div>
            <div className="input-container">
                <form>
                    <input required name="letter" maxLength={1} type="text" />
                    <button className="form-button">OK</button>
                </form>
            </div>
            <div className="wrongLetters">
                <h5>Letras erradas: <span>a, b, c, d, e, f, g,</span></h5>
            </div>
        </div>
    )
}
