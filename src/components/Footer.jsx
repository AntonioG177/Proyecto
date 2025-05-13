function Footer(){
    return(
    <>
    <footer className="bg-sky-950 p-10 flex justify-center h-[160px]">
        <div style={{ width: 800 }}>
        <div className="flex text-center justify-between">
            <div className="">
            <h2 className="font-bold text-green-300 text-sm md:text-xl">Nosotros</h2>
            <p className="text-white">
                Conoce más sobre nuestra historia y visión{" "}
                <a href="#" className="hover:text-green-300">
                ¡aquí!
                </a>
            </p>
            </div>
            <div className="">
            <h2 className="font-bold text-green-300 text-sm md:text-xl">Contáctanos</h2>
            <ul>
                <li className="text-white hover:text-green-300 ">
                <a href="#">Instagram</a>
                </li>
                <li className="text-white hover:text-green-300 ">
                <a href="#">Faceboock</a>
                </li>
                <li className="text-white hover:text-green-300 ">
                <a href="#" />
                </li>
            </ul>
            </div>
            <div className="">
            <h2 className="font-bold text-green-300 text-sm md:text-xl">
                Deja tus comentarios
            </h2>
            <p className="text-white">
                Tu{" "}
                <a
                href="registro_comentarios.html"
                className="hover:text-green-300"
                >
                comentario
                </a>{" "}
                es importante para nosotros.
            </p>
            </div>
        </div>
        </div>
    </footer>
    </>

    );
}

export default Footer