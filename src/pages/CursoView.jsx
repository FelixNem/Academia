import { useParams, Navigate } from 'react-router-dom';
import { getCursoByName } from '../utils/getCursoByName';

import '../style/CursoViewStyle.css'



export const CursoView = () => {
    const { cursoName } = useParams();

    const curso = getCursoByName( cursoName )
    if (!curso) {
      return <Navigate to={'/cursos'}/>;
    }

    const {titulo,publicoDirigido1,publicoDirigido2,queAprendera, descLg, temario, video, costos, profesores} = curso;

    // imagenes
    const zoomLogo = 'https://1000logos.net/wp-content/uploads/2021/06/Zoom-emblem.png';
    <div className='video-container'>

      {/* Esta mamada no hace nada */}
        {/* <video autoPlay muted controls>
        <source src="../src/assets/img/Prueba.mp4" type="video/mp4"/>    
          
        </video> */}
      </div>


  return (
    <section>
      <div className='cursoSection cursoinfo' >
        <div className='clase' >
          <div className='claseText' >
            <p className='claseHeader bigFont' >{titulo}</p>
            <p>{ descLg }</p>
          </div>

          <div className='claseGratis' >
            <img className='bannerImg' src={zoomLogo} alt='banner'/>
          </div>
        </div>

        <p className='span-costos'>Costos desde</p>
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
      
      <div class='cursoSection cursoDirigido'>
        <div className='cursoDirigidoCenter'>
          <p class='dirigido'>¿A quién va dirigido este curso?</p>
          <div class='img-curso'>
              <div className='divDirigido1'>
                  <img class='imgDirigido1' src={zoomLogo} alt='imgDirigido1'/>
                  <p className='DescripcionMejorar'>Para gente que quiere mejorar</p>
                  <p className='p-descripcion'>{ publicoDirigido1 }</p>
              
              </div>
              <div className='divDirigido2'>
                  <img class='imgDirigido1' src={zoomLogo} alt='imgDirigido1'/>
                  <p className='DescripcionMejorar'>Diseñadores y profesionales de otros sectores</p>
                  <p className='p-descripcion'>{ publicoDirigido2 }</p>
                 
              </div>
              
          </div>
        </div>
      </div>

      

      <div className='cursoSection temario'>
        <div className='temarioCenter temarioText' >
          <div className='textCenter'>
            <p className='claseHeader bigFont' >¿Qué aprenderás?</p>
            <ul class="listaAprendera">
              {
                queAprendera.map( aprendera => <li>{aprendera}</li> )
              }
            </ul>
          </div>
        </div>
        <div className='temarioCenter temarioImg' >
        <div className='video-container2'>

        <video autoPlay muted controls>
<source src={video} type="video/mp4"/>    

  
</video>
</div>
        </div>
      </div>


      <div className='cursoSection conoceProfesores' >
        <div className='profesoresCenter'>      
          <p className='claseHeader bigFontprofe' >Conoce a tus Profesores</p>
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
      </div>

    </section>
  )
}
