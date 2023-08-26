import React from 'react'
import './product.css'

const Product = (props) => {
    const {id, name, price, productImage} = props.data
    return (
        <div className="product">
            <img src={productImage}/>
            <div className="description">
                <p><b>{name}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn'>Add to Cart</button>
        </div>
    )
}


export default Product