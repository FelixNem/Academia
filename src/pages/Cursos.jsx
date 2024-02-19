import React from 'react'

import '../style/CursosStyle.css'
import { CarruselCard } from '../components/CarruselCard'

export const Cursos = () => {

  const curso1 = {
    img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
    nombre: 'INGLES',
    desc: '¡Despierta tu potencial con el inglés! 🚀🗺️ Aprende el idioma que abre puertas al éxito global. 💬🌐 #AprendeInglés #ÉxitoGlobal' 

  }

  const curso2 = {
    img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
    nombre: 'PINTURA',
    desc: '¡Pinta tu mundo! 🎨 ✨cubre la magia de la creatividad con cada trazo. 🖌🌟 #Arte #Pintura' 

  }

  const curso3 = {
    img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
    nombre: 'INGLES',
    desc: '¡Despierta tu potencial con el inglés! 🚀🗺️ Aprende el idioma que abre puertas al éxito global. 💬🌐 #AprendeInglés #ÉxitoGlobal' 

  }

  return (
    <section className='cursos' >
      {/* <div>
        <button>
          Catalago de cursos
        </button>
        <p>
          CURSOS ONLINE DIRIGIDOS POR INSTRUCTORES EXPERTOS,<br/>
          RECONOCIDOS EN SUS ÁREAS DE ESPECIALIZACIÓN, DISPUESTOS<br/>
          A COMPARTIR TODOS LOS SECRETOS DE LAS PROFESIONES DIGITALES
        </p>
      </div>
      <div className='carrusel' >
        <CarruselCard />
      </div> */}
    </section>
  )
}
