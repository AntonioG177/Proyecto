import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [usuario, setUsuario] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Si el usuario escribe "admin", se considera admin
    if (usuario === 'admin') {
      localStorage.setItem('role', 'admin')
      navigate('/admin/lista') // Redirige al CRUD
    } else {
      localStorage.setItem('role', 'user')
      navigate('/') 
    }
  }

  return (
    <div className="container h-[550px] mx-auto px-4 z-10 relative flex-grow items-center mt-10 p-6">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-100 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Bienvenid@</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Nombre de usuario</label>
                <input
                  type="text"
                  id="usuario"
                  placeholder="Escribe tu nombre"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>

              <div className="mb-4">
                <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input
                  type="text"
                  id="usuario"
                  placeholder="Escribe tu contraseña"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className='text-center text-sky-800'>
                <p>¿Eres usuario nuevo?</p>
                <a className='hover:text-green-700 cursor-pointer'>Registrate</a>
              </div>

              <div className="mb-4 mt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  Ingresar
                </button>
              </div>

              <div className="text-center space-y-2">
                <span className="text-sm text-gray-600">Tip: escribe <strong>admin</strong> para ver el CRUD.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
