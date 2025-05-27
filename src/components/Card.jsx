import { useNavigate } from "react-router-dom";

function Card(props){

    const navigate = useNavigate();
    
    // Funcion que recibe el id del producto seleccionado y redirige a otra pagina
    const verProducto = (id) => {
    navigate(`/ver-producto/${id}`);
    };
return (

<div className="grid grid-cols-1  border  border-gray-400 rounded-lg bg-white shadow-gray-200 shadow-2xl dark:border-blue-400 dark:bg-blue-100 p-3 ">
    <img className="h-40 object-contain mx-auto mb-4" src={props.image?props.image:imgDefault} alt="" />
    <div className="">
        <h5 className="font-semibold  text-center dark:hover:text-white">{props.title?props.title:'Title'}</h5>
        <h5 className="font-semibold  text-center text-blue-800 dark:hover:text-white">${props.model?props.model:'model'} MXN</h5>
    </div>

    {/* Botones de agregar carrito y ver producto */}
    <div className="flex space-x-3 mt-4 justify-center">
        <a onClick={() => verProducto(props.id)} className=" bg-sky-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-sky-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 dark:hover:text-white p-2 ">
                Ver producto
        </a>
        <a href={props.productRef?props.productRef:'#'} className=" bg-orange-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-orange-700 dark:bg-orange-600 dark:focus:ring-orange-800 dark:hover:bg-orange-500 dark:hover:text-white p-2">
                Agregar a Carrito
        </a>
    </div>
   
</div>

);
}
export default Card;