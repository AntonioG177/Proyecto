function ListaProducto(){
    return(
    <>
    <div class=" grid grid-cols-6 bg-gray-300 text-white p-5">
    <h2 class="text-black text-2xl font-bold items-center col-span-2">Lista de productos</h2>
    <form class="col-span-2">
        <input class="border border-gray-300 px-1 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 text-black" type="search" placeholder="Buscar" aria-label="Buscar"/>
        <button class="bg-blue-500 rounded-md py-2 px-5 cursor-pointer  hover:bg-blue-400">Buscar</button>
    </form>
        <button class="bg-gray-500 rounded-md px-2 py-1 text-sm text-white cursor-pointer hover:bg-gray-400 col-end-7 transition duration-150 ease-in-out"  type="submit"  onclick="window.location.href='crear_producto.html'">Agregar</button>
    </div>
    
    
    <div class="p-4">
        <table class=" table-fixed border-collapse border border-gray-400 w-full p-8">
        <thead>
            <tr>
            <th class="border border-gray-300 bg-gray-200">#</th>
            <th class="border border-gray-300 bg-gray-200">Nombre</th>
            <th class="border border-gray-300 bg-gray-200">Cantidad</th>
            <th class="border border-gray-300 bg-gray-200">Precio</th>
            <th class="border border-gray-300 bg-gray-200">Marca</th>
            <th class="border border-gray-300 bg-gray-200">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th >1</th>
            <td class="border border-gray-300" >Mark</td>
            <td class="border border-gray-300" >Otto</td>
            <td class="border border-gray-300">@mdo</td>
            <td class="border border-gray-300" >@dfasdf</td>
            <td class="border border-gray-300">
                <button class="bg-blue-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400" type="button" onclick="window.location.href='editar_producto.html'">Editar</button>
                <button class="bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400" type="button">Eliminar</button>
                <button class="bg-gray-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-gray-400"  type="button" onclick="window.location.href='detalle_producto.html'">Detalle</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
        
        
    </>
    );
}

export default ListaProducto