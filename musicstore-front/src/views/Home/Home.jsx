import React, { useState, useEffect } from 'react';
import './home.css';
import Product from '../../components/Product/Product';
import product1 from '../../assets/guitar.jpg'
import product2 from '../../assets/violin.jpg'
import product3 from '../../assets/bass.jpg'
import product4 from '../../assets/drums.jpg'
import product5 from '../../assets/trumpet.jpg'

const Home = () => {
    const [fetchedProducts, setFetchedProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/Instrument/')
            .then(response => response.json())
            .then(data => {
                const transformedProducts = data.map(product => {
                    let productImage;
                    if (product.name.includes('guitar')) {
                        productImage = product1;
                    } else if (product.name.includes('violin')) {
                        productImage = product2;
                    } else if (product.name.includes('bass')) {
                        productImage = product3;
                    } else if (product.name.includes('drums')) {
                        productImage = product4;
                    } else if (product.name.includes('trumpet')) {
                        productImage = product5;
                    } else {
                        productImage = 0;
                    }
                    return {
                        ...product,
                        productImage
                    };
                });
                const shuffledProducts = transformedProducts.sort(() => Math.random() - 0.5);
                setFetchedProducts(shuffledProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
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

