import { Carrusel } from '../components/Carrusel'
import '../style/CursosStyle.css'

export const Cursos = () => {

  return (
    <section className='cursos' >
      <div className='cursosText' >
        <p>
          Cursos online dirigidos por instructores expertos,<br></br>
          reconocidos en sus areas de especializacion, dispuestos<br></br>
          a compartir todos los secretos de las profesiones digitales 
        </p>
        <h2 className='cursosHeader' >Catalago de Cursos</h2>
      </div>

      <Carrusel />
    </section>
  )
}
