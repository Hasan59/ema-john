import React from 'react';
import './Product.css';

const Product = (props) => {

    const { name, img, seller, price, stock } = props.goo;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product_design'>

                <h5>{name}</h5>
                <p>by:{seller}</p>
                <h3>${price}</h3>
                <p>Only {stock} left in a stock -order soon</p>
                <button className='main-button btn btn-primary' onClick={() => props.handleAddProduct(props.goo)}>
                    Add to cart
                </button>

            </div>
        </div>
    );
};

export default Product;