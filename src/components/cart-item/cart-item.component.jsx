import React from "react";

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className = 'cart-item'>
        <img src = {imageUrl} alt='item'/>
        <span className='name'></span>
        <span className='price'></span>
        {quantity} x {price}
    </div>
)

export default CartItem;