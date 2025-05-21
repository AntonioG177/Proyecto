function Navegation() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-sky-900 p-4">
    <h1 className="text-center text-2xl font-bold text-green-300 mt-2">Crtl+Compras</h1>
    <ul className="flex space-x-8 mt-2 text-white">
      <li><a className="hover:text-green-300" href="/">Inicio</a></li>
      <li><a className="hover:text-green-300" href="/productos">Productos</a></li>
      <li><a className="hover:text-green-300" href="/nosotros">Nosotros</a></li>
      <li><a className="hover:text-green-300" href="/login">Iniciar Sesión</a></li>
    </ul>
  </nav>

  )
}

export default Navegation
