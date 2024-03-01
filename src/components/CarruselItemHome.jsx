import {useNavigate} from 'react-router-dom';

export const CarruselItemHome = ({
    img, curso, desc
}) => {

    const navigate = useNavigate();
    
    const onClick = () => {
        let param = curso.toLowerCase();
        navigate(`cursos/${param}`)
    } 

  return (
    <div className='cardHome'>
        <img src={`${img}`} alt='imagen del curso' />

        <h2>{ curso }</h2>

        <p>{ desc }</p>

        <button className='btn btn-primary' onClick={onClick} >
            Saber Más
        </button>
    </div>
  )
}