
function Contactanos (){
    return(
        <>
        <section className=" bg-sky-700 text-white">
            <h1 className="text-2xl font-bold  text-center p-7">Contáctanos</h1>
        </section>

        <div className="flex flex-wrap p-10">
            <div className="w-full max-w-md mx-auto">
            <form className="space-y-4 p-10 border border-gray-50  shadow-2xl rounded-md bg-gray-50">
                <div className="mb-4 ">
                    <label for="nombre" className="font-semibold text-gray-700">Nombre</label>
                    <div className="mt-3">
                        <input type="text" className=" border border-gray-700  rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 w-[380px] p-2" id="nombre"/>
                    </div>
                </div>
                <div className="mb-4 ">
                    <label for="apellido" className="font-semibold text-gray-700">Apellido</label>
                    <div className="mt-3">
                        <input type="text" className=" border border-gray-700  rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 w-[380px]  p-2" id="apellido"/>
                    </div>
                </div>
                <div className="mb-4 ">
                    <label for="correo" className="font-semibold text-gray-700">Correo</label>
                    <div className="mt-3">
                        <input type="text" className=" border border-gray-700  rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 w-[380px]  p-2" id="correo"/>
                    </div>
                </div>
                <div className="mb-4 ">
                    <label for="dudaSug" className="font-semibold text-gray-700">Duda / Sugerencia</label>
                    <div className="mt-3">
                        <textarea type="text" className=" border border-gray-700  rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 w-[380px]  p-2" id="dudaSug"/>
                    </div>
                </div>
                
                <div class="flex justify-center space-x-3 gap-4 mt-4">
                    <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">Enviar</button>
                </div>
                </form>
            </div>
        </div>
        </>
  )
}

export default Contactanos