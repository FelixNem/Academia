import { useNavigate } from 'react-router-dom';

import '../style/NosotrosStyle.css'

export const Nosotros = () => {
    const navigate = useNavigate();

    const onclick = () => {
        navigate('vacantes');
    }

  return (
    <section className="nosotros" >
        <div className='somosContainer' >
            <h2 className='somosHeader' >¿Quienes Somos?</h2>
            
            <div className='somosText' >
                <p>
                    Somos más que una escuela; somos una comunidad apasionada comprometida
                    con el crecimiento y desarrollo de habilidades diversas para todas las edades
                </p>
                <button className='btn btn-secondary' onClick={onclick} >Vacantes</button>
            </div>
        </div>
        <div className='somosContainer factoCajitas' >

            <div className='cajita' >
                <h3>+500</h3>
                <p>Alumnos inscritos</p>
            </div>

            <div className='cajita' >
                <h3>100%</h3>
                <p>Docentes expertos en su área</p>
            </div>

            <div className='cajita' >
                <h3>+5</h3>
                <p>Cursos Disponibles</p>
            </div>

        </div>
    </section>
  )
}
