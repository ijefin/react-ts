import React from 'react'
import { Button } from '../Button/Button'
import "./StartScreen.css"

export const StartScreen = () => {
    return (
        <>
            <div className="menu-screen">
                <h1 className='title'>Secret Word!</h1>
                <h2>Clique no botão abaixo para iniciar</h2>
                <Button text="Iniciar" />
            </div>
        </>
    )
}
