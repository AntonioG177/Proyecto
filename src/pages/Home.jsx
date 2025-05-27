import React from 'react'
import ProductGrid from './ProductGrid'
import Carousel from '../components/Carousel'

/*Imagenes */
import Img2 from '/img/LChanel.jpg' 
import Img3 from '/img/LSamsumg.jpg'
import Img4 from '/img/LXiaomi.jpg'
import Img5 from '/img/LPhone.jpg'
import Img6 from '/img/Rolex.jpg'

function Home() {
  return (
    <>
    <header className="relative bg-[url('/img/Fondo.jpg')] bg-cover bg-center bg-no-repeat text-center py-24 md:py-36 lg:py-90 px-4">
      <div className="absolute inset-0 bg-[rgba(30,59,138,0.57)]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-wide drop-shadow-md">
        ¡Bienvenido a Ctrl+Compras!
      </h1>
      <a href='#productos'><button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all cursor-pointer">
        Ver Productos
      </button></a>
      </div>
    </header>
    <div className='p-6 w-[100%]'>
      <Carousel /> {/* Aquí va el carrusel */}

      <section className="bg-gray-100 mt-20 rounded-lg shadow mb-14 hola">
        <h2 className="bg-gray-200 text-xl font-light py-4 px-6 rounded-t-lg">Las mejores marcas</h2>
        <div className="flex flex-wrap justify-evenly items-center gap-6 p-6">
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:scale-105 transition">
            <img src={Img2} className="w-20 h-20 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700">Chanel</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:scale-105 transition">
            <img src={Img3} className="w-20 h-20 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700">Samsung</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:scale-105 transition">
            <img src={Img4} className="w-20 h-20 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700">Xiaomi</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:scale-105 transition">
            <img src={Img5} className="w-20 h-20 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700">Apple</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:scale-105 transition">
            <img src={Img6} className="w-20 h-20 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700">Rolex</span>
          </div>
        </div>
      </section>
    </div>

      <div className='p-6'>
      <section id="productos" className="bg-gray-100 rounded-lg shadow ">
            <h2 className="bg-gray-200 text-xl font-light py-4 px-6 rounded-t-lg">Lo que quieres a los mejores precios</h2>
            <div className="flex flex-wrap justify-around gap-6 p-6 bg-white">
                
            <ProductGrid/>
    
            </div>
      </section>
      </div>
    </>
  )
}

export default Home

  