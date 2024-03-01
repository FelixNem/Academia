
import { Link, NavLink } from 'react-router-dom';

import '../style/NavbarStyle.css'

export const Navbar = () => {
    return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 contenedor-header'>
			<Link className='navbar-brand' to='/'>
				Academia de Habiliadades
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to='/'
					>
						Bienvenido
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to='/cursos'
					>
						Cursos
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to='/nosotros'
					>
						Sobre Nosotros
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to='/contacto'
					>
						Contacto
					</NavLink>
				</div>
			</div>

			{/* <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<button className='nav-item nav-link btn' onClick={}>
						/*** aqui va una imagen
					</button>
				</ul>
			</div> */}
		</nav>
	);
}
