import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitem-format cartitems-format-main">
                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitem-quantity">{cartItems[product.id]}</button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img 
                  src={remove_icon} 
                  onClick={() => removeFromCart(product.id)} 
                  alt="Remove item" 
                  className='remove-icon'
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // This prevents a warning when no items are found.
      })}
          <div className="cartitems-down">
              <div className="cartitems-total">
                  <h1>Cart Totals</h1>
                  <div>
                      <div className="cartitems-total-item">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmount()}</p>
                      </div>
                      <hr />
                      <div className="cartitems-total-item">
                          <p>Shipping Fee</p>
                          <p>Free</p>
                      </div>
                      <hr />
                      <div className="cartitems-total-item">
                          <h3>Total</h3>
                          <h3>${getTotalCartAmount()}</h3>
                      </div>
                  </div>
                  <button>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cartitems-promocode">
                  <p>Promo Code? Enter here</p>
                  <div className="cartitems-promobox">
                      <input type="text" placeholder='promo code' />
                      <button>Submit</button>
                  </div>
              </div>
          </div>
    </div>
  );
};

export default CartItems;