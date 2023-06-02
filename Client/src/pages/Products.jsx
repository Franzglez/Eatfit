import { useEffect } from "react";
import productService from "../services/productServices";
import {useState } from "react";
import {Link} from "react-router-dom";

function Products (){
    const [products, setProducts] = useState([]);    

    useEffect(() => {
        productService.getAllProducts().then(res => setProducts(res.data))
    },[])
return (
    <>
    <h1> {products.length} Productos Tienda </h1>
    <ul>
        {products.map(product => (
            <li key={product._id}>
               <h2> {product.titulo}</h2>
               <Link to={`/products/edit/${product._id}`}> Editar Producto </Link>  
               <Link to={`/products/edit/${product._id}`}> Borrar Producto </Link>  
            </li>
        ))}
    </ul>
    </>
)
};

export default Products;