import {
	createBrowserRouter
  } from "react-router-dom";

import { Bienvenido, Contacto, Cursos, CursoView, MuchoTexto, Nosotros, Vacante } from '../pages'
import { Navbar, Footer } from "../components";

export const routerAcademia = createBrowserRouter([
	{
		path: '/',
		element: <>
			<Navbar />
			<Bienvenido/>
			<Footer />
		</>,
		errorElement: <>
		<Navbar />
		<Bienvenido/>
		<Footer />
	</>,
	},
	{
		path: 'cursos',
		element: <>
			<Navbar/>
			<Cursos/>
			<Footer />
		</>
	},
	{
		path: 'nosotros',
		element: <>
			<Navbar />
			<Nosotros />
			<Footer />
		</>,
	},
	{
		path: 'contacto',
		element: <>
			<Navbar/>
			<Contacto/>
			<Footer />
		</>
	},
	{
		path: 'legal',
		element: <>
			<Navbar/>
			<MuchoTexto />
		</>
	},
	{
		path: 'nosotros/vacantes',
		element: <>
			<Navbar/>
			<Vacante />
			<Footer />
		</>
	}, 
	{
		path: 'cursos/:cursoName',
		element: <>
			<Navbar/>
			<CursoView/>
			<Footer />
		</>
	}
])
