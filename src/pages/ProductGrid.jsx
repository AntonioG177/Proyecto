import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    // Filtrado simple
    const filteredProducts = category === "all" 
        ? products 
        : products.filter(product => product.category === category);

    return (
        <>
            {/* Selector de categoría simple */}
           
            <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-4 p-2 border rounded"
            >
                <option value="all">Todas las categorías</option>
                <option value="electronics">Electrónica</option>
                <option value="jewelery">Joyería</option>
                <option value="men's clothing">Ropa de hombre</option>
                <option value="women's clothing">Ropa de mujer</option>
            </select>

            <div key="product-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">      
                {filteredProducts.map(e => (
                    <Card 
                        id={e.id} 
                        key={e.id} 
                        title={e.title} 
                        paragraph={e.description} 
                        image={e.image} 
                        model={e.price}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductGrid;