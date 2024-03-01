import { CarruselItem } from '../components'
import { cursos } from '../utils/cursos'

export const Carrusel = () => {
  return (
    <div className='cursosCarrusel' >
    {
      cursos.map( curso => <CarruselItem  img={ curso.img } curso={ curso.nombre } desc={ curso.desc } /> )
    }

  </div>
  )
}
