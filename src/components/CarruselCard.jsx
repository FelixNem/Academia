import React from 'react'

import '../style/CarruselStyle.css'

export const CarruselCard = ({img, curso, desc}) => {
  return (
    <div className='carruselCard'>
    <img src={`${img}`} alt='imagen del curso' />

    <h2>{ curso }</h2>

    <p>{ desc }</p>

    <button>
        Saber Más
    </button>
</div>
  )
}
