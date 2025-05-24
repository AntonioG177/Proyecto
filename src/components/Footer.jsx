function Footer(){
    return(
    <>
        <footer className="">
            <div className="bg-gray-500 h-[20px]">
            </div>
            <div className="grid gird-rows-3 md:grid-cols-3 md:place-content-center text-center bg-sky-900 p-4 h-full">
                    <div className="">
                        <h2 className="text-green-300 md:text-xl">Nuestra empresa</h2>
                        <p className="text-white hover:text-green-400 cursor-pointer">Conoce sobre nuestra empresa aquí</p>
                    </div>
                    <div className="" > 
                        <h2 className="text-green-300 md:text-xl">Contáctanos</h2>
                        <ul className="text-white ">
                            <li className="hover:text-green-400 cursor-pointer">Facebook</li>
                            <li className="hover:text-green-400 cursor-pointer">Instragram</li>
                            <li className="hover:text-green-400 cursor-pointer">X</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-green-300 md:text-xl">Dejamos ayudarte</h2>
                        <p className="text-white hover:text-green-400 cursor-pointer">Deja tus comentarios y dudas aquí</p>
                    </div>
            </div>
        </footer>

    </>

    );
}

export default Footer