function Navegation() {
  const role = localStorage.getItem('role')

  return (
    <nav className="flex flex-wrap items-center justify-between bg-sky-900 p-4">
    <h1 className="text-center text-2xl font-bold text-green-300 mt-2">Crtl+Compras</h1>
    <ul className="flex space-x-8 mt-2 text-white">
 
      {role !== 'admin' && (
          <>
          <li><a href="/" className="hover:text-green-300">Inicio</a></li>
          <li> <a href="/productos" className="hover:text-green-300">Productos</a></li>
          <li><a href="/nosotros" className="hover:text-green-300">Nosotros</a></li>
          <li> <a href="/contactanos" className="hover:text-green-300">Contáctanos</a></li>
          <li> <a href="/login" className="hover:text-green-300">Iniciar Sesión</a></li>

            
           
          </>
        )}

        {role === 'admin' && (
          <>
            <a href="/" className="hover:text-green-300">Inicio</a>
            <a href="/admin/lista" className="hover:text-green-300">Lista Productos</a>
            <a href="/admin/crear" className="hover:text-green-300">Crear Producto</a>
          </>
        )}

        {role && (
        <div>
          <a
            onClick={() => {
              localStorage.removeItem('role')
              window.location.href = '/login'
            }}
            className="bg-green-700 hover:bg-green-600 cursor-pointer px-3 py-1 rounded"
          >
            Cerrar sesión
          </a>
        </div>
      )}
     

    </ul>
  </nav>

  )
}

export default Navegation
