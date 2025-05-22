import React from 'react'
import ProductGrid from './ProductGrid'

/*Imagenes */
import Img1 from '../assets/promo.jpg'
import Img2 from '../assets/LMoto.jpg'
import Img3 from '../assets/LSamsumg.jpg'
import Img4 from '../assets/LXiaomi.jpg'
import Img5 from '../assets/LPhone.jpg'


function Home() {
  return (
    <>
      <header className="bg-sky-700  text-center p-16 h-[300px] ">
        <h1 className="text-3xl text-white font-bold p-5 ">¡Bienvenido a Crtl+Compras!</h1>
        <a className="bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer mb-1 hover:bg-green-500 " href="/login">Inicia Sesión</a>
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

  