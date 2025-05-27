function RegistrarUsuario(){
    return (
        <>
        <div className="container h-[900px] mx-auto px-4 z-10 relative flex-grow items-center mt-10 p-6">
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-gray-100 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Bienvenid@</h3>
                <form>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Nombre de usuario</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu nombre de usuario"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu nombre"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Apellido Paterno</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu apellido paterno"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Apellido Materno</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu apellido materno"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    />
                </div>
                 <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu correo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                    type="text"
                    id="usuario"
                    placeholder="Escribe tu numero de teléfono"
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
                    <a className='hover:text-green-700 cursor-pointer' href="login">Iniciar Sesión</a>
                </div>

                <div className="mb-4 mt-2">
                    <button
                    type="submit"
                    className="w-full bg-sky-700 hover:bg-sky-600 cursor-pointer text-white font-medium py-2 px-4 rounded-md transition duration-200"
                    >
                    Crear Cuenta
                    </button>
                </div>

                <div className="text-center space-y-2">
                    
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        
        
        </>
    )
}

export default RegistrarUsuario;