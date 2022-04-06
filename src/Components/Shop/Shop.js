import React, { useState } from 'react';
import './Shop.css';
//import data from '../../data.json';
import './Shop.css';
import Product from '../Products/Product';
import products from '../../products.json';
import Cart from '../CART/Cart';




const Shop = () => {
    const handleAddProduct = (e) => {
        //console.log(e);
        const newCart = [...cart, e];
        setCart(newCart);

    }
    const [cart, setCart] = useState([]);
    const first10 = products.slice(0, 10);
    const [product, setProduct] = useState(first10);






    return (
        <div class="shop-container">
            <div className="product-container">

                {/* {
                    data.map(user => <Product goo={user}></Product>)


                } */}



                {
                    product.map(user => <Product goo={user}

                        handleAddProduct={handleAddProduct}


                    ></Product>)
                }
            </div>



            <div className="cart-container">



                <Cart cart={cart}></Cart>
            </div>
        </div>




    );
};

export default Shop;