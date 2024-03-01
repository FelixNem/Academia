import { useParams, Navigate } from 'react-router-dom';
import { getCursoByName } from '../utils/getCursoByName';

import '../style/CursoViewStyle.css'

export const CursoView = () => {
    const { cursoName } = useParams();

    const curso = getCursoByName( cursoName )
    if (!curso) {
      return <Navigate to={'/cursos'} />;
    }

    const { titulo, descLg, temario, costos, profesores } = curso;

    // imagenes
    const zoomLogo = 'https://1000logos.net/wp-content/uploads/2021/06/Zoom-emblem.png';
    const aulaImg = 'https://www.educalinkapp.com/blog/wp-content/uploads/2021/07/reglas-del-salon-de-clase-0-138539227_m.jpg';

  return (
    <section>
      <div className='cursoSection cursoinfo' >
        <div className='clase' >
          <div className='claseText' >
            <p className='claseHeader bigFont' >{ titulo }</p>
            <p>{ descLg }</p>
          </div>

          <div className='claseGratis' >
            <p className='claseHeader' >Clases Online</p>
            <img className='zoomImg' src={zoomLogo} alt='logo Zoom'/>
            <p> Te ofrecemos una clase gratis de prueba </p>
          </div>
        </div>

        <span>Costos desde</span>
        <div className='cursoCosto' >
          {
            costos.map(({precio, dias}) => (
            <div>
              <h3 className='bigNumber' >{precio}</h3>
              <span className='cursoDias' >{ dias }</span>
            </div>))
          }
        </div>
      </div>
      <div className='cursoSection temario'>
        <div className='temarioCenter temarioText' >
          <div className='textCenter' >
            <p className='claseHeader bigFont' >Online</p>
            <p>La flexibilidad de estudiar a tu propio ritmo, donde<br/>
              quieras y cuando quieras, redefine completamente el<br/>
              paradigma educativo</p>
          </div>

          <div>
            <p className='claseHeader bigFont' >Temario</p>
            <ul>
              {
                temario.map( tema => <li>{tema}</li> )
              }
            </ul>
          </div>
        </div>
        <div className='temarioCenter temarioImg' >
          <img src={aulaImg} alt='imagen de las aulas'/>
        </div>
      </div>

      <div className='cursoSection' >
        <p className='claseHeader bigFont' >Conoce a tus Profesores</p>
        <div className='profesores' >
          {
            profesores.map((profe) => (
              <div className='profeCard'>
                <img className='fotoProfe' src={profe.foto} alt='foto del profe' />
                <p className='profeNombre' >{profe.nombre}</p>
                <p className='profeDesc' >{profe.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
