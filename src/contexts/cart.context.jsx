import { createContext, useState, useEffect, useContext } from "react";
import { ProductsContext } from "./products.context";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem) {
        return cartItems.map((cartItem) => {
            if(cartItem.quantity < cartItem.amount){
                return cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            }else {
                alert('No more available units');
                return cartItem
            }
        }
    );
}

return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id ? {
            ...cartItem, quantity: cartItem.quantity - 1
        } : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    payCart: () => {},
});

export const CartProvider = ({children}) =>{
    const { updateProductsMap } = useContext(ProductsContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setcartCount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>(total + cartItem.quantity), 0);
        setcartCount(newCartCount);
    }, [cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=>((total + (cartItem.quantity * cartItem.price)) ), 0);
        setcartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem( cartItems, productToAdd ));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem( cartItems, cartItemToRemove ));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const payCart = () => {
        updateProductsMap(cartItems);
        setCartItems([]);
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
        payCart,
    };

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}
