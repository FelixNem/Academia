import { useForm } from '../hook'

import { Redes } from '../components/Redes'

import '../style/ContactoStyle.css'

const formData = {
	name: '',
	email: '',
	messague: '',
};

const formValidations = {
	name: [ value => value.length >= 1, 'El nombre es obligatorio' ],
	email: [value => value.includes('@'), 'El correo debe tener una @'],
	messague: [value => value.length >= 1, 'El mensaje es obligatorio'],
};

export const Contacto = () => {

	const {
		name,
		email,
		messague,
		onInputChange,
		onResetForm,
		isFormValid,
		messagueValid,
	} = useForm(formData, formValidations);

	const onSubmit = e => {
		e.preventDefault();

		if (!isFormValid) {
      alert( messagueValid )
      return;
    };

    console.log({
      name, email, messague
    })

		onResetForm();
	};

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
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Tu Nombre'
                  name='name'
							    value={name}
							    onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="inputEmail" className="form-label">Correo Electronico</label>
                <input
                  id="inputEmail"
                  type="email"
                  className="form-control"
                  placeholder='Tu Correo'
                  name='email'
							    value={email}
							    onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="inputComplaint" className="form-label">Mensaje</label>
                <textarea
                  id="inputComplaint"
                  rows="3"
                  className="form-control"
                  placeholder='Tu Mensaje'
                  name='messague'
							    value={messague}
							    onChange={onInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning" onClick={ onSubmit } >Enviar</button>
            </form>
          </div>
          
          
          <Redes />
        </div>
      </div>
    </section>
  )
}
