import React, {useContext} from 'react' 
import { HomeContext } from '../../context/Home-context'

const Item = (props) => {
    const {id, name, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart, cartItemsUpdate} = useContext(HomeContext)
    return (
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                <p className="name"><b>{name}</b></p>
                <p>${price}</p>
                <div className="countAmount">
                    <button onClick={()=>addToCart(id)}> + </button>
                    <input value={cartItems[id]} onChange={(e) => cartItemsUpdate(Number(e.target.value), id)}/>
                    <button onClick={()=>removeFromCart(id)}> - </button>
                </div>
            </div>
        </div>
    )
}


export default Item