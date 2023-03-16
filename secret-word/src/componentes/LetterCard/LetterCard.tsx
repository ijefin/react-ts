import React from 'react'
import "./LetterCard.css"

interface letters {
    letter: string
    show: string
}

export const LetterCard = ({ letter, show }: letters) => {
    return (
        <>
            <div className="card-letter">
                <p style={{ display: `${show}` }}>{letter}</p>
            </div>
        </>
    )
}
