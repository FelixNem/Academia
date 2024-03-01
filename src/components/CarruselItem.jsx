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
        <p>{ desc }</p>
        <img src={`${img}`} alt='imagen del curso' />
        <button className='btn btn-primary' onClick={onClick} >
            Saber Más
        </button>
    </div>
  )
}
