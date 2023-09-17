import React from 'react';
import '../App.css';
import './Hero.css'
import CardCollage from './CardCollage'

import data from '../pieces'

export default function Hero() {
    const pieces = data.map(piece => {
        if(piece.type === "art-piece" || piece.type === "art-drawings"){
        return (
          <CardCollage
            className = "card-title"
            id = {piece.id}
            name = {piece.name}
            img = {piece.img}
            type = {piece.type}
          />
        )
        } else return ;
      })

      function shuffleCards(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    

      shuffleCards(pieces)

      return (
        <div className = "container">
            <section className="card-home" >
            {pieces}
            </section>
            <h1 className = "container-text">
                ALAN HARRIS
            </h1>
            <h2 className = "container-text2">
                Digital Artist
            </h2>
        </div>
      );}