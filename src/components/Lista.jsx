import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

function ListaProducto(props){
    const navigate = useNavigate();
    
    // Funcion que recibe el id del producto seleccionado y redirige a otra pagina
    const verProducto = (id) => {
    navigate(`/ver-producto/${id}`);
    };

    return(
    <>    
        {/* Genera toda la lista de productos que proporciona la API */}
        <tr>
        <th className="border border-gray-300">{props.id?props.id:'id'}</th>
        <td className="border border-gray-300 " >{props.title?props.title:'Title'}</td>
        <td className="border border-gray-300" ><img className="h-40 object-contain mx-auto mb-4" src={props.image?props.image:imgDefault} alt="" /></td>
        <td className="border border-gray-300 text-center">${props.model?props.model:'model'} MXN</td>
        
        <td className="border border-gray-300 p-4">
            <div  className="flex flex-wrap gap-1">

            <Link to="/admin/editar" 
                className="bg-blue-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-blue-400">
                Editar
            </Link>
            <Link to="" 
                className="bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-red-400">
                Eliminar
            </Link>
            <a onClick={() => verProducto(props.id)}
                className="bg-gray-500 px-3 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-gray-400">
                Detalle
            </a>
            </div>
        </td>
        </tr>
        
    </>
    );
}

export default ListaProducto