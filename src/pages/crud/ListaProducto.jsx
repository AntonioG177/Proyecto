import { Link } from "react-router-dom";
import Lista from "../../components/Lista";
import {useState, useEffect} from "react";

function ListaProducto() {
  const [products, setProducts] = useState([]);

  // Manda a llamar a la API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-6 bg-gray-300 text-white p-5">
        <h2 className="text-black text-2xl font-bold items-center col-span-2">Lista de productos</h2>
        <form className="col-span-2">
          <input className="border border-gray-700 px-1 py-1 mr-4 mb-2 rounded-md focus:outline-none focus:ring-2 text-black" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <button className="bg-blue-500 rounded-md py-2 px-5 cursor-pointer hover:bg-blue-400">Buscar</button>
        </form>
        <div className="bg-gray-500 rounded-md px-2 py-1 sm:text-sm text-center text-white cursor-pointer hover:bg-gray-400 col-end-7">
          <Link to="/admin/crear" className="md:text-xl text-sm md:w-full md:h-full md:font-semibold">Agregar</Link>
        </div>
      </div>

      {/* Tabla que contiene todos los productos */}
      <div className="md:p-4 p-5">
        <table className="table-fixed border-collapse border border-gray-400 w-full p-8">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-gray-200">#</th>
              <th className="border border-gray-300 bg-gray-200">Nombre</th>
              <th className="border border-gray-300 bg-gray-200">Imagen</th>
              <th className="border border-gray-300 bg-gray-200">Precio</th>
              <th className="border border-gray-300 bg-gray-200">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Se manda a llamar al componente para generar toda la lista de productos */}
            {products.map((e) => (
              <Lista
                key={e.id}
                id={e.id}
                title={e.title}
                image={e.image}
                model={e.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListaProducto;