import React from 'react'

import '../style/CarruselStyle.css'

export const CarruselCard = ({img, curso, desc}) => {
  return (
    <div className='card' >
      <h2>{ curso }</h2>
      <p>{ desc }</p>
      <img src={`${img}`} alt='imagen del curso' />
      <button>
          Saber Más
      </button>
    </div>
  )
}
