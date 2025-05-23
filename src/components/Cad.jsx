

function Card(props){
return (

<div className="grid grid-cols-1  border  border-gray-400 rounded-lg bg-white dark:border-blue-400 dark:bg-blue-400 p-3 ">
    <img className="h-40 object-contain mx-auto mb-4" src={props.image?props.image:imgDefault} alt="" />
    <div className="">
        <h5 className="font-semibold  text-center dark:hover:text-white">{props.title?props.title:'Title'}</h5>
        <h5 className="font-semibold  text-center text-blue-800 dark:hover:text-white">${props.model?props.model:'model'} MXN</h5>
    </div>
    <div class="flex space-x-3 mt-4 justify-center">
        <a href={props.productRef?props.productRef:'#'} className="bg-blue-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-blue-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 dark:hover:text-white p-2">
                Ver producto
        </a>
        <a href={props.productRef?props.productRef:'#'} className=" bg-green-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-green-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 dark:hover:text-white p-2">
                Agregar a Carrito
        </a>
    </div>
   
</div>

);
}
export default Card;