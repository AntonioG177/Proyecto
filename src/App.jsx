import { Routes, Route, Navigate } from 'react-router-dom'
import Navegation from './components/Navegation'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Footer from './components/Footer'
import Login from './pages/Login'
import CrearProducto from './pages/crud/Frm_CrearProducto'
import EditarProducto from './pages/crud/Frm_EditarProducto'
import ListaProducto from './pages/crud/ListaProducto'
import Productos from './pages/Productos'
import Contactanos from './pages/Contactanos'
import VerProductoCliente from './pages/VerProductoCliente'
import RegistroComentarios from './pages/RegistroComentarios'
import RegistrarUsuario from './pages/RegistrarUsuario'


const isAdmin = () => localStorage.getItem('role') === 'admin'

const ProtectedRoute = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/login" />
}

  

function App() {
  return (
    <>
      <Navegation />
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/contactanos" element={<Contactanos/>} />
          <Route path="/ver-producto/:id" element={<VerProductoCliente />} />
          <Route path="/comentarios" element={<RegistroComentarios />} />
          <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
          
          {/* Rutas protegidas para el CRUD de productos */}


          <Route path="/admin/crear" element={<ProtectedRoute><CrearProducto /></ProtectedRoute>} />
          <Route path="/admin/editar" element={<ProtectedRoute><EditarProducto /></ProtectedRoute>} />
          <Route path="/admin/lista" element={<ProtectedRoute><ListaProducto /></ProtectedRoute>} />
          
        </Routes>
      </main>
      <Footer/>

    </>
  )
}

export default App
