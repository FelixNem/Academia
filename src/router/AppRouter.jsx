import {
	createBrowserRouter
  } from "react-router-dom";

import { Bienvenido, Contacto, Cursos, Vacante } from '../pages'
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
		path: 'contacto',
		element: <>
			<Navbar/>
			<Contacto/>
		</>
	},
	{
		path: 'vacante',
		element: <>
			<Navbar/>
			<Vacante />
		</>
	}
])
