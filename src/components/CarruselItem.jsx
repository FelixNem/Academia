import React from 'react'

import '../style/CarruselStyle.css'

export const CarruselItem = ({
    img, curso, desc
}) => {
  return (
    <div className='bCurso card'>
        <img src={`${img}`} alt='imagen del curso' />

        <h2>{ curso }</h2>

        <p>{ desc }</p>

        <button className='btn btn-primary' >
            Saber Más
        </button>
    </div>
  )
}
