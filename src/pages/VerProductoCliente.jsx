import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/*Imagenes */
import Img1 from '../assets/Avatar1.jpg'
import Img2 from '../assets/Avatar2.jpg'
import Img3 from '../assets/Avatar3.jpg'

function VerProductoCliente() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  //Llamada a la API con el id proporcionado
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);

  // Funcion para calcular el Rating y asignarle estrellas
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalfStar) stars.push("⯪");
    while (stars.length < 5) stars.push("✩");

    return stars.join(" ");
  };

  return (
    <>
      <section className="bg-sky-700 text-white">
        <h1 className="text-2xl font-bold text-center p-7">Detalle del producto</h1>
      </section>

      {producto && (
        <div className="flex justify-center mt-8 mb-10">
          <div className="max-w-md w-full border p-6 rounded-lg shadow-xl bg-blue-100">
            <h5 className="text-xl font-semibold text-center text-blue-600 mb-4">{producto.title}</h5>
            <p className="text-black mb-4"><span className="font-semibold">Descripción:</span> {producto.description}</p>
            <p className="text-black mb-4"><span className="font-semibold">Precio:</span> ${producto.price}</p>

            {/* FUNCION PARA EL RATING */}
            {producto.rating && (
              <p className="text-yellow-700 mb-4">
                <span className="font-semibold ">Rating:</span> {renderStars(producto.rating.rate)} ({producto.rating.rate}/5) — {producto.rating.count} opiniones
              </p>
            )}


            <div className="flex justify-center mt-6"><img src={producto.image} className="w-48 h-48 object-contain rounded shadow" alt={producto.title}/></div>
          </div>
        </div>

    )}
      {/* Botones de Regresar, Agregar a carrito, Comentar */}
      <div className="flex space-x-15 mt-4 mb-4 justify-center">
        <a href="/" className=" bg-blue-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-green-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 dark:hover:text-white p-2 ">Regresar</a>
        <a href="" className="bg-orange-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-orange-700 dark:bg-orange-600 dark:focus:ring-orange-800 dark:hover:bg-orange-500 dark:hover:text-white p-2">Agregar a Carrito</a>
        <a href="/comentarios" className="bg-green-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-green-700 dark:bg-green-600 dark:focus:ring-orange-800 dark:hover:bg-green-500 dark:hover:text-white p-2">Comentar</a>

      </div>

        {/* Seccion para comentarios */}
      {producto && (
        <div class="flex justify-center bg-white rounded-lg shadow mb-14 p-6">

            <div className="w-370 rounded-lg shadow-xl bg-gray-200">
              <h2 class="bg-gray-300 text-xl font-light py-4 px-6 rounded-t-lg">Opiniones de nuestros clientes  -  {producto.rating.count} </h2>
              <div class="grid gap-6 p-6">
                  <div class="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                      <div class="flex items-start gap-4">
                          <img src={ Img1 } alt="Usuario" class="w-12 h-12 rounded-full object-cover"/>
                          <div class="flex-1">
                              <div class="flex items-center gap-2 mb-2">
                                  <h4 class="font-semibold text-blue-600">Juan Pérez</h4>
                                  <span class="text-sm text-gray-500">- 15 Enero 2024</span>
                              </div>
                              <p class="text-gray-700 mb-3">¡Excelente servicio! Los productos llegaron en perfecto estado y antes de lo esperado. Definitivamente volveré a comprar.</p>
                              <div class="flex items-center gap-2 text-yellow-400">
                                  ★★★☆☆
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                      <div class="flex items-start gap-4">
                          <img src={ Img2 } alt="Usuario" class="w-12 h-12 rounded-full object-cover"/>
                          <div class="flex-1">
                              <div class="flex items-center gap-2 mb-2">
                                  <h4 class="font-semibold text-blue-600">María García</h4>
                                  <span class="text-sm text-gray-500">- 10 Enero 2024</span>
                              </div>
                              <p class="text-gray-700 mb-3">Buena relación calidad-precio. El soporte postventa fue muy útil para resolver mis dudas sobre la garantía.</p>
                              <div class="flex items-center gap-2 text-yellow-400">
                                  ★★★★☆
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
                      <div class="flex items-start gap-4">
                          <img src={ Img3 } alt="Usuario" class="w-12 h-12 rounded-full object-cover"/>
                          <div class="flex-1">
                              <div class="flex items-center gap-2 mb-2">
                                  <h4 class="font-semibold text-blue-600">Carlos Rodríguez</h4>
                                  <span class="text-sm text-gray-500">- 5 Enero 2024</span>
                              </div>
                              <p class="text-gray-700 mb-3">Variedad de productos y opciones de pago flexibles. La entrega fue un poco demorada pero cumplieron con lo prometido.</p>
                              <div class="flex items-center gap-2 text-yellow-400">
                                  ★★★★☆
                              </div>
                          </div>
                      </div>
                  </div>
              </div>    
            </div>
        </div>
        )}
    </>
  );
}

export default VerProductoCliente;
