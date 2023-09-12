import React, { useState } from 'react'
import {PRODUCTS} from '../fetchProductos'



export const HomeContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i <PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
};

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
    

    const removeFromCart = (id) =>{
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1 }))

    }

    const cartItemsUpdate = (amount, id) => {
        setCartItems((prev) => ({...prev, [id]: amount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, cartItemsUpdate}


    console.log(cartItems)
    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
        
    
}

export default HomeContextProvider