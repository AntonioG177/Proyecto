function VerProducto(){
    return(
        <>
    <section class=" bg-sky-700 text-white">
        <h1 class="text-2xl font-bold  text-center p-7">Detalle del producto</h1>
    </section>

    <div class="flex justify-center gap-4 mt-5 ">
        <div class=" size-130 border p-4 rounded-lg shadow-xl bg-gray-50 border-gray-50 " >
          <div class="p-4">
            <div class="text-xl font-bold text-gray-800">
              <h5 class="text-gray-800 mb-4 text-center">Producto</h5>
              <p class="text-gray-600 mb-4">Nombre:</p>
              <p class="text-gray-600 mb-4">Cantidad:</p>
              <p class="text-gray-600 mb-4">Precio:</p>
              <p class="text-gray-600 mb-4">Marca:</p>


              <div class="flex justify-center">
                <img src="img/producto2.png" class=" w-50 h-50 object-cover mx-auto rounded-none shadow " alt="..."/>
              </div>
            </div>
          </div>
        </div>     
      </div>
      <div class="flex justify-center gap-4 mt-4">
       <a type="submit" className="bg-green-700 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-green-600 " href="/admin/lista">Regresar</a>
      </div>
        
        
        
        </>
    );
}

export default VerProducto