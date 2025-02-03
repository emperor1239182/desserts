import { createContext, useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { useLocalStorage } from "usehooks-ts";


export const CartCount = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useLocalStorage('cartCount', {});
  const [dessert, setDessert] = useLocalStorage('cart', []);

 
  const handleIncrement = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1, // ✅ Update count per item
      }));
    };
  
    const handleDecrement = (id) => {
      setCart((prev) => ({
        ...prev,
        [id]: Math.max((prev[id] || 0) - 1, 0),
      }));
    };

  const addToCart = (items)=>{
    setDessert((prev) => (prev.includes(items) ? prev : [...prev, items]));
  }

  return (
    <CartCount.Provider value={{ cart, handleIncrement, handleDecrement, addToCart, dessert }}>
      {children}
    </CartCount.Provider>
  );
};

// ✅ Fix ESLint warning
CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
