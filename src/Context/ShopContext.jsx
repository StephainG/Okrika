import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find the product information for the current item
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) { // Ensure itemInfo is found
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount; // Return totalAmount after the loop
    }

    const getTotalCartItems = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += cartItems[item];
            }
        }
        return totalAmount; // Return totalAmount after the loop
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount,  all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;