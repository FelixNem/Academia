import { useNavigate } from 'react-router-dom';

import { CarruselItemHome } from '../components';

import facebook from '../assets/img/sigueme.png'
import '../style/BienvenidoStyle.css'
import '../assets/img/Prueba.mp4'


export const Bienvenido = () => {
  const navigate = useNavigate();
  const curso = {
    img: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1fa-1f1f8.png',
    nombre: 'INGLES',
    desc: '¡Despierta tu potencial con el inglés! Aprende el idioma que abre puertas al éxito global. 💬🌐' 

  }

  const onClick = () => {
    navigate('cursos');
  }
  
  return (
    <section>
      <div className='bienvenido' >

      <div className='escuela' >
        <h1 className='nombre' >Academia<br/><span className='bold' >De Habilidades</span></h1>
        <div className='parrafo' >
          <p>
            Somos más que una escuela; somos una comunidad apasionada comprometida con el crecimiento y 
            desarrollo de habilidades diversas para todas las edades.
            Nuestra comunidad está formada por individuos motivados y apasionados que comparten un objetivo común: fomentar el descubrimiento y el desarrollo integral de cada persona.
          </p>
        </div>
          
        <button className='btn btn-primary' onClick={onClick} >
          MÁS INFORMACIÓN
        </button>
      </div>
      
        <div className='carruselHome'>
          <CarruselItemHome img={ curso.img } curso={ curso.nombre } desc={ curso.desc } />
        </div>  
      </div>


      <div className='parrafo4' >
        <h1>¿POR QUÉ APRENDER INGLÉS?</h1>
      </div>


       <div className='parrafos'>
        <p>Aprender inglés ofrece una variedad de beneficios tanto a nivel personal como profesional.<br></br>
          Aquí tienes algunos puntos clave que explican por qué aprender inglés puede ser valioso:
        </p>
    </div>


        <div className='parrafo3'>
 <p>1.- Comunicación Global: El inglés es uno de los idiomas más hablados en el mundo y 
 <br></br> es utilizado como lengua franca en muchos contextos internacionales. Aprender inglés 
 <br></br>te permite comunicarte con personas de diferentes culturas y nacionalidades.</p>

<p>2.- Oportunidades Laborales: Muchas empresas requieren habilidades en inglés en sus 
<br></br>empleados, ya que facilita la comunicación en entornos comerciales internacionales. 
<br></br>Tener competencia en inglés puede mejorar significativamente tus perspectivas de empleo.</p>     


<p>3.-Acceso a Recursos Educativos: El inglés es ampliamente utilizado en la academia y en la investigación a nivel mundial.
<br></br> Aprender inglés te brinda acceso a una vasta cantidad de recursos educativos, desde libros y artículos hasta cursos en línea
<br></br> y conferencias, permitiéndote aprovechar al máximo tus estudios y tu desarrollo académico.</p>
       </div>
    
       <div className='parrafo5'>
       <img src="../src/assets/img/bienvenidos.jpg" />

       <br></br>

       <br></br>      
</div>
       <div className='somosContainer factoCajitas2' >

<div className='cajitas' >
    <h3>Contamos</h3>
    <p>con Profesores calificados</p>
</div>

<div className='cajitas' >
    <h3>Metodología Innovadora</h3>
    <p>Para los alumnos</p>
</div>

<div className='cajitas' >
    <h3>Cursos</h3>
    <p>personalizados</p>
</div>

<div className='cajitas' >
    <h3>Clase prueba</h3>
    <p>Para los alumnos</p>
</div>
</div>
    </section>
  )








  
}
