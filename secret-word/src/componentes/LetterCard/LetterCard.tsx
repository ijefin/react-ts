import React from 'react'
import "./LetterCard.css"

interface letters {
    letter: string
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
