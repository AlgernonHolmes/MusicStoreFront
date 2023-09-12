import React, { useState, useEffect } from 'react';
import './home.css';
import Product from '../../components/Product/Product';
import {PRODUCTS} from '../../fetchProductos'



const Home = () => {

    const [fetchedProducts, setFetchedProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setFetchedProducts(PRODUCTS);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, []);

    
    return (
        <div className="shop">
            <div className='shopTitle'>
            </div>
            <div className="products">
                {fetchedProducts.map(product => <Product data={product} key={product.id} />)}
            </div>
        </div>
    );

    
};



export default Home;
