function Login(){
    return(
    <div class="container mx-auto px-4 z-10 relative flex-grow items-center mt-10 p-6">
        <div class="flex justify-center">
            <div class="w-full md:w-1/2 lg:w-1/3">
                <div class="bg-gray-100 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-8">
                    <h3 class="text-2xl font-bold text-center  mb-6">Bienvenid@</h3>
                    <form>
                       
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                            <input type="email" id="email" placeholder="nombre@ejemplo.com" 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                   
                        <div class="mb-4">
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                            <input type="password" id="password" placeholder="••••••••" 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        
                   
                        <div class="mb-4 flex items-center">
                            <input type="checkbox" id="remember" 
                                   class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                            <label for="remember" class="ml-2 block text-sm text-gray-700">Recordar sesión</label>
                        </div>
                 
                        <div class="mb-4">
                            <button type="submit" 
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                                Ingresar
                            </button>
                        </div>
                        
                        <div class="text-center space-y-2">
                            <a href="#" class="text-sm text-blue-600 hover:text-blue-800 hover:underline">¿Olvidaste tu contraseña?</a>
                            <br/>
                            <a href="#" class="text-sm text-blue-600 hover:text-blue-800 hover:underline">Registrar nuevo usuario</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Login