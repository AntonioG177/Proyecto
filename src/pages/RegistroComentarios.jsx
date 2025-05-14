function RegistroComentarios(){
    return(<>
        <main class="flex-grow">
        <section class="bg-sky-700 text-white">
            <h1 class="text-2xl font-bold text-center p-7">Registrar Comentario</h1>
        </section>

        <div class="container ml-auto mr-auto flex items-center justify-center mt-3">
            <div class="w-full max-w-md mx-auto">
                <form class="space-y-4">
                    <div class="mb-4">
                        <label for="nombre" class="font-semibold text-gray-700 block">Nombre</label>
                        <input type="text" class="w-full text-left border border-gray-300 px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="nombre"/>
                    </div>

                    <div class="mb-4">
                        <label for="apellidoPaterno" class="font-semibold text-gray-700">Apellido Paterno</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="apellidoPaterno"/>
                    </div>

                    <div class="mb-4">
                        <label for="apellidoMaterno" class="font-semibold text-gray-700">Apellido Materno</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="apellidoMaterno"/>
                    </div>

                    <div class="mb-4">
                        <label for="comentario" class="font-semibold text-gray-700">Comentario</label>
                        <textarea type="text" class="w-full border border-gray-300 px-4 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" id="comentario"></textarea>
                    </div>

                    <div class="flex justify-center gap-4 mt-3">
                        <button type="submit" class="bg-red-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400" onclick="window.location.href='ver_producto.html'">Regresar</button>
                        <button type="submit" class="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">Comentar</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <br></br>
    
    </>
    )
}

export default RegistroComentarios