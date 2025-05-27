import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ListaProducto(props) {
  const navigate = useNavigate();

  const verProducto = (id) => {
    navigate(`/ver-producto/${id}`);
  };

  // Función para confirmar y manejar la eliminación
  const confirmarEliminacion = () => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmar) {
      alert("Producto eliminado correctamente.");
    }
  };

  return (
    <>    
      <tr>
        <th className="border border-gray-300">{props.id ? props.id : 'id'}</th>
        <td className="border border-gray-300">{props.title ? props.title : 'Title'}</td>
        <td className="border border-gray-300">
          <img className="h-40 object-contain mx-auto mb-4" src={props.image ? props.image : 'https://via.placeholder.com/150'} alt="" />
        </td>
        <td className="border border-gray-300 text-center">${props.model ? props.model : 'model'} MXN</td>
        <td className="border border-gray-300 p-4">
          <div className="flex flex-wrap gap-1">
            <Link to="/admin/editar" 
              className="bg-blue-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">
              Editar
            </Link>
            <button
              onClick={confirmarEliminacion}
              className="bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400"
            >
              Eliminar
            </button>
            <a
              onClick={() => verProducto(props.id)}
              className="bg-gray-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-gray-400"
            >
              Detalle
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ListaProducto;
