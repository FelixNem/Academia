import React, { useEffect, useRef, useState } from 'react'

import { CarruselCard } from '../components/CarruselCard'
import { cursos } from '../utils/cursos'

export const Carrusel = () => {
  return (
    <div className='carruselCards' >
    {
      cursos.map( curso => <CarruselCard  img={ curso.img } curso={ curso.nombre } desc={ curso.desc } /> )
    }

  </div>
  )
}
