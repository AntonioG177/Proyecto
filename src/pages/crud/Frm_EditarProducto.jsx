function EditarProducto(){
    return(
         <>
    <section className=" bg-sky-700 text-white">
        <h1 className="text-2xl font-bold  text-center p-7">Editar producto</h1>
     </section>

    <div className="flex flex-wrap p-10">
        <div className="w-full max-w-md mx-auto">
        <form className="space-y-4 p-10 border border-gray-50 shadow-2xl rounded-md bg-gray-50">
             <div className="mb-4">
                <label htmlFor="nombre" className="block font-semibold text-gray-700 mb-1">Nombre</label>
                <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="nombre"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="apellido" className="block font-semibold text-gray-700 mb-1">Cantidad</label>
                <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="apellido"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="correo" className="block font-semibold text-gray-700 mb-1">Precio</label>
                <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3"
                id="correo"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dudaSug" className="block font-semibold text-gray-700 mb-1">Descripción</label>
                <textarea 
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 p-2 sm:p-3 min-h-[120px]"
                id="dudaSug"
                />
            </div>
             
            <div class="flex justify-center space-x-3 gap-4 mt-4">
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">Enviar</button>
                <a type="submit" className="bg-red-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400 " href="/admin/lista">Cancelar</a>
            </div>
            </form>
        </div>
    </div>
     </>
    )
}

export default EditarProducto