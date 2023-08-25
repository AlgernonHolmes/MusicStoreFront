import React from 'react'
import './home.css'
import Product from '../../components/Product/Product'
import { PRODUCTS } from '../../products'



const Home = () => {
    
    return (
        <div className="shop">
            <div className='shopTitle'>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => <Product data={product}/>)}
            </div>
        </div>
        
    )
}

export default Home