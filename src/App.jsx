import './App.css'
import { Navbar } from './components'
import { Bienvenido, Contacto, Cursos } from './pages'

function App() {

  return (
    <>
      {/* <Navbar /> */}

      <Bienvenido />
      <Cursos />
      <Contacto />
    </>
  )
}

export default App
