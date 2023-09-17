import React, { useState } from "react";
import './Card.css';
import './Gallery.css';
import data from './../pieces'

export default function Gallery(props) {
    const galleryImages = data;

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <button className='btnClose' onClick={handleCloseModal}  >  <i class="gallery-button fa fa-circle-xmark"/> </button>
          {/* <button className='btnPrev' onClick={prevSlide} > <i class="gallery-button fa-solid fa-chevron-left"/> </button>
          <button className='btnNext' onClick={nextSlide} > <i class="gallery-button fa-solid fa-chevron-right"/> </button> */}
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
            <h2 class="art-name">{galleryImages[slideNumber].name}</h2>
          </div>
        </div>
      }

      <div>
        {
          galleryImages && galleryImages.map((slide, index) => {
            if (props.type === slide.type){
                return(
                <div 
                    className='card' 
                    key={index}
                    onClick={ () => handleOpenModal(index) }
                >
                    <img className = "card-image"src={slide.img} alt='' />
                </div>
                )
            } else{
                return
            }
          })
        }
      </div>

    </div>
  )
}