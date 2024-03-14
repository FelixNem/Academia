import {useNavigate} from 'react-router-dom';

import '../style/CarruselStyle.css'

export const CarruselItem = ({
    img, curso, desc
}) => {

  const navigate = useNavigate();

  const onClick = () => {
    let param = curso.toLowerCase();
    navigate(`${param}`)
  }

  return (
    <div className='cursoCard'>
        <h2>{ curso }</h2>
        <img src={`${img}`} alt='imagen del curso' />
        <p className='p-descripcion'>{ desc }</p>
        <button className='btn-card' onClick={onClick} >
            Más información
        </button>
    </div>
  )
}
