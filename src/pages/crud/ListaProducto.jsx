import { Link } from "react-router-dom";
import FilaProducto from "../../components/Lista";
import { useState, useEffect } from "react";

// Funcion que permite traer los productos
function ListaProducto() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Funcion para filtrar los productos por título
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Esta duncion evita que la pagina se recarge
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid grid-cols-6 bg-gray-300 text-white p-5">
        <h2 className="text-black text-2xl font-bold items-center col-span-2">Lista de productos</h2>
        
        <form className="col-span-2" onSubmit={handleSearchSubmit}>
          <input
            className="border border-gray-300 px-1 py-1 mb-2 rounded-md focus:outline-none focus:ring-2 text-black"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} //  actualiza la variable del estado
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-md py-2 px-5 cursor-pointer hover:bg-blue-400 ml-2"
          >
            Buscar
          </button>
        </form>

        <div className="bg-gray-500 rounded-md px-2 py-1 sm:text-sm text-center text-white cursor-pointer hover:bg-gray-400 col-end-7">
          <Link to="/admin/crear" className="md:text-xl text-sm md:w-full md:h-full md:font-semibold">
            Agregar
          </Link>
        </div>
      </div>

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
            {/* Esta funcion permite buscar los productos si hay algun filtro y sino trae todos los proporcionados por la API */}
            {filteredProducts.length > 0 ? (
              filteredProducts.map((e) => (
                <FilaProducto
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  paragraph={e.description}
                  image={e.image}
                  model={e.price}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-600">
                  No se encontraron productos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListaProducto;
