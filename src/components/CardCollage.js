import React from 'react'
import './Card.css';


export default function CardCollage(props) {
  return (
    <div className = "card-title">
        <img src = {props.img} alt={`Art Piece - ${props.name}`}/>
    </div>
  )
}

