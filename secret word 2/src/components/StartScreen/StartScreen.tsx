import React from 'react'
import { Screens } from '../../interfaces/Screens'
import { Button } from '../Button/Button'
import "./StartScreen.css"



export const StartScreen = ({ func }: Screens) => {
    return (
        <>
            <div className="menu-screen">
                <h1 className='title'>Secret Word!</h1>
                <h2>Clique no botão abaixo para iniciar.</h2>
                <Button handleFunc={func} text="Iniciar" />
            </div>
        </>
    )
}
