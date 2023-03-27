import React from 'react'
import "./Card.css"

interface cardContent {
    title: string,
    price: number
}
export const Card = ({ title, price }: cardContent) => {

    return (
        <div className='card'>
            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <div className="card-price">
                <h4>{price}</h4>
            </div>
        </div>
    )
}
