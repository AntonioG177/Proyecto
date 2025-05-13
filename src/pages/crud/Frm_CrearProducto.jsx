function CrearProducto(){
    return(
        <>
    <section className=" bg-sky-700 text-white">
        <h1 className="text-2xl font-bold  text-center p-7">Crear producto</h1>
     </section>

    <div className="container ml-auto mr-auto flex items-center justify-center mt-3">
        <div className="w-full max-w-md mx-auto">
        <form className="space-y-4 p-10">
            <div className="mb-4 ">
                <label for="nombre" className="font-semibold text-gray-700">Nombre</label>
                <input type="text" className=" text-left border border-gray-300 px-30 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="nombre"/>
            </div>
            <div class="mb-4  ">
                <label for="cantidad" className="font-semibold text-gray-700">Cantidad</label>
                <input type="text" className="border border-gray-300 px-30 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="cantidad"/>
            </div>
            <div class="mb-4">
                <label for="precio" className="font-semibold text-gray-700">Precio</label>
                <input type="text" className="border border-gray-300 px-30 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="precio"/>
            </div>
            <div class="mb-4">
                <label for="marca" className="font-semibold text-gray-700">Marca</label>
                <input type="text" className="border border-gray-300  px-30 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="marca"/>
            </div>
            <div class="flex justify-center gap-4 mt-3">
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">Enviar</button>
                <button type="submit" className="bg-red-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400 " onclick="window.location.href='lista_producto.html' ">Cancelar</button>
            </div>
            </form>
        </div>
    </div>
     </>
    );
}

export default CrearProducto

