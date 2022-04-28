import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Product from './Product';

function ProductPage() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('https://practiceapi.devmountain.com/products')
        .then(res => {
            setproducts(res.data);
        })
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <Product key={product.id} productId={product.id} productName={product.title} productImg={product.image} productPrice={product.price} />
            ))}
        </div>
    )
}

export default ProductPage