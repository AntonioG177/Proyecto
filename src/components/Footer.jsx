function Footer(){
    return(
    <>
        <footer className="">
            <div className="bg-gray-500 h-[5px]">
            </div>
            <div className="grid gird-rows-3 md:grid-cols-3 md:place-content-center text-center bg-sky-900 p-4 h-full">
                    <div className="">
                        <h2 className="text-green-300 md:text-xl"><a href="/nosotros">Nuestra empresa</a></h2>
                        <p className="text-white hover:text-green-400 cursor-pointer"><a href="/nosotros">Conoce sobre nuestra empresa aquí</a></p>
                    </div>
                    <div className="" > 
                        <h2 className="text-green-300 md:text-xl">Redes Sociales</h2>
                        <ul className="text-white ">
                            <li className="hover:text-green-400 cursor-pointer"><a href="https://www.facebook.com/">Facebook</a></li>
                            <li className="hover:text-green-400 cursor-pointer"><a href="https://www.instagram.com/">Instragram</a></li>
                            <li className="hover:text-green-400 cursor-pointer"><a href="https://x.com/">X</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-green-300 md:text-xl"><a href="/contactanos">Dejanos ayudarte</a></h2>
                        <p className="text-white hover:text-green-400 cursor-pointer"><a href="/contactanos">Deja tus comentarios y dudas aquí</a></p>
                    </div>
            </div>
        </footer>

    </>

    );
}

export default Footer