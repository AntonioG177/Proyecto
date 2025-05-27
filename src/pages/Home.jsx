import React from 'react'
import ProductGrid from './ProductGrid'

/*Imagenes */

import Img1 from '/img/promo.jpg'
import Img2 from '/img/LChanel.jpg' 
import Img3 from '/img/LSamsumg.jpg'
import Img4 from '/img/LXiaomi.jpg'
import Img5 from '/img/LPhone.jpg'
import Img6 from '/img/Rolex.jpg'

function Home() {
  return (
    <>
    <header className="relative bg-[url('/img/Fondo.jpg')] bg-cover bg-center bg-no-repeat text-center py-24 md:py-36 lg:py-48 px-4">
      <div className="absolute inset-0 bg-[rgba(30,59,138,0.57)]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold p-4 sm:p-5">
          ¡Bienvenido a Crtl+Compras!
        </h1>
        <a className="bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-green-500 transition-colors duration-200 text-sm sm:text-base" 
          href="/login">
          Inicia Sesión
        </a>
      </div>
    </header>
    <div className='p-6'>
      <section className="bg-gray-100 rounded-lg shadow mb-14">
        <h2 className="bg-gray-200 text-xl font-light py-4 px-6 rounded-t-lg">Las mejores marcas</h2>
        <div className="flex flex-wrap justify-evenly items-center gap-6 p-6">
          <img
            src={Img2}
            alt="Marca 1"
            className="w-24 h-24 object-contain  rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Img3}
            alt="LMoto"
            className="w-24 h-24 object-contain  rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Img4}
            alt="Marca 3"
            className="w-24 h-24 object-contain  rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Img5}
            alt="Marca 4"
            className="w-24 h-24 object-contain  rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Img6}
            alt="Marca 4"
            className="w-24 h-24 object-contain  rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </section>
    </div>

      <section className="flex justify-center mb-14">
            <img 
            src={Img1}
            alt="Promoción" 
            className="md:w-[800px] w-[300px] h-auto rounded shadow-lg cursor-pointer"
            />
      </section>

      <div className='p-6'>
      <section className="bg-gray-100 rounded-lg shadow ">
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

  