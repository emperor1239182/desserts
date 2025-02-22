import { createContext, useRef, useState, useContext } from "react";

export const CartContext = createContext();

export const CartContainer = ({ children }) => {
  const [cart, setCart] = useState({});
  const [, setDummyState] = useState(0);
  const Counts = useRef({});

  const forceUpdate = () => setDummyState((prev) => prev + 1);

  const addToCart = (id, image, price, name) => {
    setCart((prev) => {
      const updatedCart = {
        ...prev,
        [id]: {
          image: image,
          price: price,
          name: name,
          quantity: prev[id] ? prev[id].quantity + 1 : 1,
        },
      };
      Counts.current[id] = updatedCart[id].quantity;
      forceUpdate();
      return updatedCart;
    });
  };

  const handleIncrement = (id) => {
    Counts.current[id] = (Counts.current[id] || 0) + 1;
    forceUpdate();
  };

  const handleDecrement = (id) => {
    Counts.current[id] = Math.max((Counts.current[id] || 1) - 1, 0);
    if (Counts.current[id] === 0) {
      setCart((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    }
    forceUpdate();
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
    Counts.current[id] = 0
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCounts: Counts.current, handleIncrement, handleDecrement, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
