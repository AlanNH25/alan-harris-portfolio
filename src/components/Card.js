import React from 'react'
import './Card.css';



export default function Card(props) {
  return (
    <div className = "card">
        <img src = {props.img} className = "card-image" alt={`Art Piece - ${props.name}`}/>
        <div className = "art-name">
          {/* <h2> {props.name} </h2> */}
        </div>
    </div>
  )
}