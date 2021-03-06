import React from 'react';


const cart = (props) => {
    const cart = props.cart;

    //const total = cart.reduce((total, prd) => total + prd.price ,0);
    let total =0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if(total>35){
        shipping =0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.00;
    }

    const tax = (total * 0.1);
    const totalPrice = (total + shipping + Number(tax));
    const fixNumber = num =>{
        const fixNum = num.toFixed(2);
        return Number(fixNum);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {fixNumber(total)}</p>
            <p>Shipping Cost: {fixNumber(shipping)}</p>
            <p>Tax + VAT: {fixNumber(tax)}</p>
            <p>Total Price: {fixNumber(totalPrice)}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default cart;