import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    for (let i = 0; i < cart.length; i++) {

        const card_number = cart[i];
        total = total + card_number.price;
    }
    let shiping = 0;
    if (total > 35) {
        shiping = 50;
    }
    else if (total > 15) {
        shiping = 4.9;

    }
    else if (total > 0) {
        shiping = 12.99;


    }
    const formatNumber = num => {
        const press = num.toFixed(2);
        return press;
    }
    const tax = (total / 10);
    return (
        <div className='Card'>
            <h4 className='text-primary'>Order Summary </h4>
            <p>Items ordered: {cart.length}</p>
            <p>Shipping Cost: {shiping}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Tax: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(total + shiping + tax)}</p>

        </div>
    );
};

export default Cart;