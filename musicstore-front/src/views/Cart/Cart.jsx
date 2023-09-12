import React, { useContext } from 'react'
import { HomeContext } from '../../context/Home-context'
import {fetchProducts} from '../../fetchProductos'
import Item from '../../components/Item/Item';
import './cart.css'

const Products = await fetchProducts();

const Cart = () => {
    
    const {cartItems} = useContext(HomeContext)
    return (
        <div className="cart">
            <div> <h1>Cart Items</h1></div>
            <div className="cart">
                {Products.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <Item data = {product}/>
                    }
                })}
            </div>
        </div>
    )
}


export default Cart