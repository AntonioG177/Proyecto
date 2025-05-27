
function Contactanos (){
    return(
        <>
        <section className=" bg-sky-700 text-white">
            <h1 className="text-2xl font-bold  text-center p-7">Contáctanos</h1>
        </section>

        <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10  bg-gray-100">
        <div className="w-full max-w-md mx-auto">
            <form className="space-y-4 p-6 sm:p-8 md:p-10 border border-gray-200 shadow-xl rounded-lg bg-white">
            <div className="mb-4">
                <label htmlFor="nombre" className="block font-semibold text-gray-700 mb-1">Nombre</label>
                <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="nombre"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="apellido" className="block font-semibold text-gray-700 mb-1">Apellido</label>
                <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="apellido"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="correo" className="block font-semibold text-gray-700 mb-1">Correo</label>
                <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="correo"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dudaSug" className="block font-semibold text-gray-700 mb-1">Duda / Sugerencia</label>
                <textarea 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3 min-h-[120px]"
                id="dudaSug"
                />
            </div>
            
            <div className="flex justify-center mt-6">
                <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 sm:px-8 sm:py-3 text-white rounded-md cursor-pointer transition-colors duration-200 shadow-md"
                >
                Enviar
                </button>
            </div>
            </form>
        </div>
        </div>
        </>
  )
}

export default Contactanos