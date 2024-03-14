import { Carrusel } from '../components/Carrusel'
import '../style/CursosStyle.css'

export const Cursos = () => {

  return (
    <section className='cursos' >
        <div className='divCursoHeader'>
          <h2 className='cursosHeader'>Catálogo de cursos</h2>
        </div>
      <div className='cursosText' >
          <p>
            Cursos online dirigidos por instructores expertos,<br></br>
            reconocidos en sus areas de especializacion, dispuestos<br></br>
            a compartir todos los secretos de las profesiones digitales 
          </p>
      </div>

      
      
      <Carrusel/>


      <div className='curso2' >
        <h1>¿QUÉ DICEN NUESTROS ALUMNOS?</h1>
          </div>
<br></br>
<br></br>


<div className='parrafo6'>
<img src="../src/assets/img/testimonio1.jpeg" />

       <br></br>

       <br></br>      
</div>

<div className='parrafo7'>
<img src="../src/assets/img/testimonio2.jpg" />

       <br></br>

       <br></br>      
</div>
          
  

         


       <br></br><br></br>
    </section>



  )
}

