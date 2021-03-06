import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setPorducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;

        })
        setCart(previousCart);
    },[]);

    const handleAddProduct = (product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let newCart;
        let count = 1;
        if(sameProduct){
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity =1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(product => <Products 
                        key = {product.key}
                        showAddToCart={true} 
                        addProduct = {handleAddProduct} 
                        product={product}>
                        </Products>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/review">
                         <button className='cart-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;