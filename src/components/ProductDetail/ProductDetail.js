import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>{productKey} detail comming soon......</h1>
            <Products showAddToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetail;