import React, { useContext } from 'react'
import './product.css'
import {HomeContext} from '../../context/Home-context'

const Product = (props) => {
    const {id, name, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(HomeContext)
    const cartItemsAmount = cartItems[id]
    return (
        <div className="product">
            <img src={productImage}/>
            <div className="description">
                <p><b>{name}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
            </button>
        </div>
    )
}


export default Product