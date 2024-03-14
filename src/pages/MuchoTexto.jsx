import {Terminos_Y_Condiciones} from '../utils/Terminos_Y_Condiciones';

import '../style/MuchoTexto.css'

export const MuchoTexto = () => {
  return (
    <section className='legalSection' >
        <div className='legalHead'>
            <h2 className='legalTitle' >Términos Y Condiciones</h2>
            <h3>Texto mamalon o eslogan de la escuela patito XD</h3>
        </div>
        <div className='legalText'>
            <p>
                {Terminos_Y_Condiciones}
            </p>
        </div>
    </section>
  )
}
