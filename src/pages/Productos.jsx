import producto1 from '../assets/producto1.png'
import producto2 from '../assets/producto2.png'
import producto3 from '../assets/producto3.png'


function Productos(){
    return(
    <>
        <main class="flex-grow">
        <div class="container mx-auto px-4 mt-10 overflow-x-auto">
            <div class="flex flex-row gap-6 min-w-max">
                <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    <img src= { producto1 } alt="Producto 1" class="w-full h-48 object-contain bg-gray-100"/>
                    <div class="p-4">
                        <h5 class="text-lg font-semibold mb-2">Producto 1</h5>
                        <p class="text-sm text-gray-600 mb-2">Descripción breve del producto 1. Calidad garantizada y precio accesible.</p>
                        <p class="text-base font-bold text-blue-600 mb-4">$99.99</p>
                        <a href="#" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">Agregar al carrito</a>
                    </div>
                </div>

             
                <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    <img src={ producto2 } alt="Producto 2" class="w-full h-48 object-contain bg-gray-100"/>
                    <div class="p-4">
                        <h5 class="text-lg font-semibold mb-2">Producto 2</h5>
                        <p class="text-sm text-gray-600 mb-2">Descripción breve del producto 2. Ofrecemos envío gratuito.</p>
                        <p class="text-base font-bold text-blue-600 mb-4">$149.99</p>
                        <a href="#" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">Agregar al carrito</a>
                    </div>
                </div>

            
                <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    <img src={ producto3 } alt="Producto 3" class="w-full h-48 object-contain bg-gray-100"/>
                    <div class="p-4">
                        <h5 class="text-lg font-semibold mb-2">Producto 3</h5>
                        <p class="text-sm text-gray-600 mb-2">Descripción breve del producto 3. ¡No te lo puedes perder!</p>
                        <p class="text-base font-bold text-blue-600 mb-4">$199.99</p>
                        <a href="#" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    </main>  
    </>
    )
}

export default Productos