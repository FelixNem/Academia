import React from 'react'

import '../style/ContactoStyle.css'

export const Contacto = () => {
  return (
    <section className='contacto' >
      <div className='container' >
        <div className='titulo' >
          <h2>Contactanos</h2>
        </div>
        <div className='cuerpo' >
          <div className='formulario' >
            <form >
              <div className="mb-3">
                <label for="inputname" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputName" />
              </div>
              <div className="mb-3">
                <label for="inputEmail1" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="inputEmail1"/>
              </div>
              <div className="mb-3">
                <label for="inputComplaint" className="form-label">Mensaje</label>
                <textarea className="form-control" id="inputComplaint" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-warning">Enviar</button>
            </form>
          </div>
          
          
          <div className='redes'>
            <span>Quedan pendientes los botones sociales de las redes</span>

          </div>
        </div>
      </div>
    </section>
  )
}
