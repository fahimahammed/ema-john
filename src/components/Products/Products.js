import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Products = (props) => {
    // console.log(props.product);
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-title"><Link to={"/product/"+key}>{name}</Link></h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - Order soon.</p>
                { props.showAddToCart && <button onClick={() => props.addProduct(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Products;