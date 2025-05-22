//...Importa UseState
import {useState, useEffect} from "react";
import Card from "../components/Cad";

function ProductGrid(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
        }, []);
    
      return(
          <div key="product-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">      
          {products.map(e=><Card key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price}/>)}
          </div>
      );
}
export default ProductGrid;