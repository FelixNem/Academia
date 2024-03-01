import {
	createBrowserRouter
  } from "react-router-dom";

import { Bienvenido, Contacto, Cursos } from '../pages'
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
	}
])
