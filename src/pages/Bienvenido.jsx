import React from 'react'

import { CarruselItem } from '../components';

import '../style/BienvenidoStyle.css'

export const Bienvenido = () => {


  const curso = {
    img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
    nombre: 'INGLES',
    desc: '¡Despierta tu potencial con el inglés! 🚀🗺️ Aprende el idioma que abre puertas al éxito global. 💬🌐 #AprendeInglés #ÉxitoGlobal' 

  }


  return (
    <section className='bienvenido'>
      <div className='escuela' >
        <h1 className='nombre' >Academia<br/><span className='bold' >De Habilidades</span></h1>
        <p>Somos más que una escuela; somos una comunidad apasionada comprometida con el crecimiento y desarrollo de habilidades diversas para todas las edades</p>
        <button>
          Más información
        </button>
      </div>
      
      <div className='carrusel'>
        <CarruselItem img={ curso.img } curso={ curso.nombre } desc={ curso.desc } />
      </div>

    </section>
  )
}
