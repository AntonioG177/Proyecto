
import ProductGrid from './ProductGrid'


function Productos(){
    return(
    <>
        <main class="flex-grow">
        <div class="container mx-auto px-4 mt-10 overflow-x-auto">
            <div className="flex flex-wrap justify-around gap-6 p-6">
                <h1 className='text-4xl text-sky-800'>Nuestros Productos</h1>

               <ProductGrid/>
              
            </div>
        </div>
    </main>  
    </>
    )
}

export default Productos