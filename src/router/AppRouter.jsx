import {
	createBrowserRouter
  } from "react-router-dom";

import { Bienvenido, Contacto, CursoView, Cursos, Nosotros, Vacante } from '../pages'
import { Navbar } from "../components";

export const routerAcademia = createBrowserRouter([
	{
		path: '/',
		element: <>
			<Navbar />
			<Bienvenido/>
		</>,
		errorElement: <>
		<Navbar />
		<Bienvenido/>
	</>,
	},
	{
		path: 'cursos',
		element: <>
			<Navbar/>
			<Cursos/>
		</>
	},
	{
		path: 'nosotros',
		element: <>
			<Navbar />
			<Nosotros />
		</>,
	},
	{
		path: 'contacto',
		element: <>
			<Navbar/>
			<Contacto/>
		</>
	},
	{
		path: 'nosotros/vacantes',
		element: <>
			<Navbar/>
			<Vacante />
		</>
	}, 
	{
		path: 'cursos/:cursoName',
		element: <>
			<Navbar/>
			<CursoView/>
		</>
	}
])
