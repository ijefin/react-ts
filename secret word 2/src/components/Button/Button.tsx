import React from 'react'

import "./Button.css"

export const Button = ({ handleFunc, text }: any) => {
    return (
        <>
            <button onClick={handleFunc} className="play">{text}</button>
        </>
    )
}