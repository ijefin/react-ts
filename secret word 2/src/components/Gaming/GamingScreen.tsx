import "./GamingScreen.css"

export const GamingScreen = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    guesses,
    letters,
    score,
    guessedLetters,
    wrongLetters
}: any) => {
    return (
        <div className="main-menu-container">
            <div className="points">
                <span>Pontuação: {score}</span>
            </div>
            <p>Tentativas restantes: {guesses}</p>
            <h4>Dica: <span className="tip">{pickedCategory}</span></h4>
            <div className="letters-container">
                {letters.map((letter: string, index: number) => (
                    letter.includes(guessedLetters) ?
                        <span key={index} className="letter">{letter}</span> :
                        <span className="blank">A</span>
                ))}
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
