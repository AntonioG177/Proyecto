

function Card(props){
return (

<div className="grid grid-cols-1  border  border-gray-400 rounded-lg bg-white dark:border-blue-400 dark:bg-blue-400 ">
    <img className="h-40 object-contain mx-auto mb-4" src={props.image?props.image:imgDefault} alt="" />
    <div className="">
        <h5 className="font-semibold  text-center">{props.title?props.title:'Title'}</h5>
        <div class="mt-auto pt-4">
          <div className="flex space-x-2 justify-center">
            <a href={props.productRef?props.productRef:'#'} className="bg-blue-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-blue-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 p-2">
                Ver producto
            </a>
            <a href={props.productRef?props.productRef:'#'} className=" bg-green-800 text-white text-center  rounded-lg  cursor-pointer hover:bg-green-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-500 p-2">
                Agregar a Carrito
            </a>
          </div>
        </div>
        
    </div>
</div>

);
}
export default Card;