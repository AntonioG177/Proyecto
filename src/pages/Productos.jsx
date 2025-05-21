import producto1 from '../assets/producto1.png'
import producto2 from '../assets/producto2.png'
import producto3 from '../assets/producto3.png'
import ProductGrid from './ProductGrid'


function Productos(){
    return(
    <>
        <main class="flex-grow">
        <div class="container mx-auto px-4 mt-10 overflow-x-auto">
            <div className="flex flex-wrap justify-around gap-6 p-6">
               <ProductGrid/>
            </div>
        </div>
    </main>  
    </>
    )
}

export default Productos