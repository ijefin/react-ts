import "./LetterCard.css"

interface letters {
    letter: any
}

export const LetterCard = ({ letter }: letters) => {
    return (
        <>
            <div className="card-letter">
                <p>{letter}</p>
            </div>
        </>
    )
}
