import React from 'react'

import '../style/CursosStyle.css'
import { CarruselCard } from '../components/CarruselCard'

export const Cursos = () => {

  const cursos = [
    {
      img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
      nombre: 'INGLES',
      desc: '¡Despierta tu potencial con el inglés! 🚀🗺️ Aprende el idioma que abre puertas al éxito global. 💬🌐 #AprendeInglés #ÉxitoGlobal' 
  
    },
    {
      img: 'https://www.pinturaparacoche.com/WebRoot/StoreES2/Shops/eb2584/569E/1A38/F6AE/F767/C842/52DF/D03B/6088/Botes-de-pintura.png',
      nombre: 'PINTURA',
      desc: '¡Pinta tu mundo! 🎨 ✨cubre la magia de la creatividad con cada trazo. 🖌🌟 #Arte #Pintura' 
  
    },
    {
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcJJFznv6mqDO3V64_GFFadcJPeJp5XVBONV7PC06loV9Lnf8AmrS6DIY-tfIKbEBmcLQqp3fv_XrGFXmil_BwpPNQMqN-caZeOujD083zfad9h20CEbJLKmtS4KdZmYygjWM_DgrJXIhSGIqafmT89tdLjku9m0XJ2leykPF5eU6pUX_d1MXIWL4_0g/s720/Portada-Lápiz-dibujando-720x380.png',
      nombre: 'Dibujo',
      desc: '¡Despierta tu potencial de dibujante! 🚀🗺️ Aprende el trazar. 🖌🌟 #Arte #Pintura' 
    }

  ]

  return (
    <section className='cursos' >
      <div className='mensaje' >
        <p >
          Cursos dirigidos por instructores expertos,<br/>
          reconocidos en sus areas de especializacion,<br/>
          dispuestos a compartir todos los secretos<br/>
          de las profesiones digitales.
        </p>
      </div>

      <div className='carruselCards' >
        {
          cursos.map( curso => <CarruselCard  img={ curso.img } curso={ curso.nombre } desc={ curso.desc } /> )
        }

      </div>
    </section>
  )
}
