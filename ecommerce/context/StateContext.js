import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
const Context = createContext();
export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
       
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + product.quantity);
     
        if (checkProductInCart) {

            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity,
                    
                }
            })
            setCartItems(updatedCartItems);

        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart`);
    };
    const onRemove =(product)=>{
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems= cartItems.filter((item)=>item._id !==product._id);
        setTotalPrice((prevTotalPrice)=> prevTotalPrice-foundProduct.price * foundProduct.quantity);
       
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities-foundProduct.quantity);
        setCartItems(newCartItems);
    }
    const toggleCartItemQuantity = (id, action) => {
        foundProduct = cartItems.find(item => item._id === id)
        index = cartItems.findIndex(product => product._id === id)
        const currCartItem = cartItems.filter(item => item._id !== id)
        if(action === 'inc'){
            currCartItem.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity+1})
            setCartItems(currCartItem)
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      }else if(action === 'dec'){
          if(foundProduct.quantity > 1){
            currCartItem.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity-1})
            setCartItems(currCartItem)
            setTotalPrice (prevTotalPrice => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
      }
    }

    const increaseQuantity = () => {
        setQty((previousQty) => previousQty + 1);
    }
    const decreaseQuantity = () => {
        setQty((previousQty) => {
            if (previousQty - 1 < 1) {
                return 1;

            }
            else {
                return previousQty - 1;
            }

        });
    }
    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
  
            decreaseQuantity,
            increaseQuantity,
            onAdd,
            setShowCart,
            toggleCartItemQuantity,
            onRemove,
         
        }}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context);