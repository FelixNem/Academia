import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#">Navbar</a>

            <div>
                <ul>
                    <li>
                        <a aria-current="page" href="#">Bienvenidos</a>
                    </li>
                    <li>
                        <a href="#">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
