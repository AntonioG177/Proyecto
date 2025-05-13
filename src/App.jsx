import { Routes, Route } from 'react-router-dom'
import Navegation from './components/Navegation'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Footer from './components/Footer'
import Login from './pages/Login'
import CrearProducto from './pages/crud/Frm_CrearProducto'
import EditarProducto from './pages/crud/Frm_EditarProducto'
import ListaProducto from './pages/crud/ListaProducto'
import VerProducto from './pages/crud/VerProducto'

function App() {
  return (
    <>
      <Navegation />
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/crearProducto" element={<CrearProducto/>} />
          <Route path="/editarProducto" element={<EditarProducto/>} />
          <Route path="/listaProducto" element={<ListaProducto/>} />
          <Route path="/verProducto" element={<VerProducto/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
