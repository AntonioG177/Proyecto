import imgDefault from './assets/react.svg'

function Card(props){
return (

<div className="flex flex-col h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-b from-sky-500 to-sky-800 dark:border-blue-400 self-stretch">
    <img className="rounded-t-lg object-scale-down object-cover h-48 w-full pt-3 remove-bg" src={props.image?props.image:imgDefault} alt="" />
    <div className="flex-1 flex h-full flex-col p-6">
        <h5 className="flex-1 1mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-sky-100">{props.title?props.title:'Title'}</h5>
        <p className="flex-1 text-gray-700 dark:text-blue-200 text-justify text-sm text-slate-600 mb-8">{props.paragraph?props.paragraph:'Body description'}</p>
        <div class="flex justify-around gap-4">
            <a href={props.productRef?props.productRef:'#'} className="p-2 place-self-end h-10 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-5 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                View Product
            </a>
            <a href={props.productRef?props.productRef:'#'} className="p-2 place-self-end h-10 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-5 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-800">
                add to cart
            </a>
        </div>
        
    </div>
</div>

);
}
export default Card;