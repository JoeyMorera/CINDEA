import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Nosotros from './pages/Nosotros'
import Cursos from './pages/Cursos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/CINDEA/' element={<Home />}/>
        <Route path='/CINDEA/nosotros' element={<Nosotros />}/>
        <Route path='/CINDEA/cursos' element={<Cursos />}/>
        <Route path='/CINDEA/contacto' element={<Contacto />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
