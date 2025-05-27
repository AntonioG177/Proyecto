
import ProductGrid from './ProductGrid'
import Img1 from '/img/promo.jpg'

function Productos(){
    return(
    <>

        <section className="flex justify-center mt-10 mb-14">
            <img 
            src={Img1}
            alt="Promoción" 
            className="md:w-[900px] w-[300px] h-auto rounded shadow-lg cursor-pointer"
            />
        </section>
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