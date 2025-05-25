//...Importa UseState
import {useState, useEffect} from "react";

import Card from "../components/Card";
import Lista from "../components/Lista"


function ProductGrid(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products") //Llamada a la API
        .then(response => response.json())
        .then(data => setProducts(data));
        }, []);
    
      return(

        <>
        
          <div key="product-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">      
          {/* Parametros que recibe el CARD */}
          {products.map(e=><Card id={e.id} key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price}/>)}
          </div>
 
        </>

      );
}
export default ProductGrid;