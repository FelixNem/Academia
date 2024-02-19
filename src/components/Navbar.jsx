import React from 'react'

import '../style/NavbarStyle.css'

export const Navbar = () => {
    const img = 'https://png.pngtree.com/png-clipart/20230801/original/pngtree-ancient-opened-book-knowledge-ancient-empty-vector-picture-image_9215430.png'

  return (
    <div className='contenedor-header' >
        <header >
            <div className="logo">
                <a href="#"><img src={img} alt="Bootstrap" width="30" height="24" /></a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" onclick="seleccionar()">Bienvenido</a></li>
                    <li><a href="#cursos" onclick="seleccionar()">Cursos</a></li>
                    <li><a href="#contacto" onclick="seleccionar()">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
