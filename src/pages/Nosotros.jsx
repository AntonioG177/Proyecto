import img1 from "/img/equipo.jpg"
import img2 from "/img/mision.jpg"
import img3 from "/img/vision.jpg"
import img4 from "/img/filosofia.jpg"


function Nosotros() {
    return(
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Nosotros */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src= { img1 } alt="Equipo de trabajo" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nosotros</h2>
          <p className="text-gray-700 text-lg">
            En Ctrl+Compras creemos que la tecnología debe ser accesible, confiable y estar al alcance de todos.
            Nos dedicamos a ofrecer productos tecnológicos de alta calidad a los mejores precios del mercado,
            brindando una experiencia de compra segura, práctica y satisfactoria para nuestros clientes.
          </p>
        </div>
      </div>

      {/* Misión */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img src={ img2 } alt="Misión" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Misión</h2>
          <p className="text-gray-700 text-lg">
            Nuestra misión es acercar la innovación tecnológica a cada rincón de México, ofreciendo productos
            de marcas reconocidas y emergentes, con precios competitivos, atención personalizada y un servicio
            postventa que marque la diferencia.
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={ img3 } alt="Visión" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-yellow-700 mb-4">Visión</h2>
          <p className="text-gray-700 text-lg">
            Aspiramos a ser la tienda líder en el país, reconocida por su compromiso con la calidad,
            el buen precio y la confianza del cliente. Buscamos crecer junto con nuestros usuarios, adaptándonos
            constantemente a sus necesidades en un entorno digital en constante cambio.
          </p>
        </div>
      </div>

      {/* Filosofía */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img src={ img4 } alt="Filosofía" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Filosofía</h2>
          <p className="text-gray-700 text-lg">
            En Ctrl+Compras creemos que la tecnología debe ser accesible, confiable y estar al alcance de todos.
            Ofrecemos productos tecnológicos de alta calidad a los mejores precios del mercado, brindando una experiencia
            de compra segura, práctica y satisfactoria.
          </p>
        </div>
      </div>
    </section>
    )
  }
  
  export default Nosotros
  