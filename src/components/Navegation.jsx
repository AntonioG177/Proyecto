/*Imagenes */
import Img1 from '/img/logo.png';
function Navegation() {
  const role = localStorage.getItem('role')

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 top-0 z-50 bg-sky-700 p-4 shadow-md">
    <div className="flex items-center ml-20">
      <a href='/'><img src={Img1} alt="LOGO" className="w-10 h-10 object-contain"/></a>
      <a href='/'><h1 className="text-center text-2xl font-bold text-green-300 ">Crtl + <br/> Compras</h1></a>
    </div>
    <ul className="flex flex-wrap space-x-8 mt-2 text-white">
 
      {role !== 'admin' && (
          <>
          <li> <a href="/" className="hover:text-green-300">Inicio</a></li>
          <li> <a href="/productos" className="hover:text-green-300">Productos</a></li>
          <li> <a href="/nosotros" className="hover:text-green-300">Nosotros</a></li>
          <li> <a href="/contactanos" className="hover:text-green-300">Contáctanos</a></li>
          <li> <a href="/login" className="hover:text-green-300">Iniciar Sesión</a></li>

            
           
          </>
        )}

        {role === 'admin' && (
          <>
            <a href="/" className="hover:text-green-300">Inicio</a>
            <a href="/admin/lista" className="hover:text-green-300">Lista Productos</a>
            <a href="/admin/crear" className="hover:text-green-300">Crear Producto</a>
            <li> <a href="/nosotros" className="hover:text-green-300">Nosotros</a></li>
            <li> <a href="/contactanos" className="hover:text-green-300">Contáctanos</a></li>
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
