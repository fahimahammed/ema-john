import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.pd;
    return (
        <div>
            <h4 className='product-name'>{name}</h4>
            <p>Qunatity: {quantity}</p>
            <p>Price: ${price}</p>
            <button onClick={() => props.removeProduct(key)} className='cart-btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;