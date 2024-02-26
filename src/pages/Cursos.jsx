import { Carrusel } from '../components/Carrusel'

import '../style/CursosStyle.css'

export const Cursos = () => {

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

      <Carrusel />
    </section>
  )
}
