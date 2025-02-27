import { createContext, useState, useContext, useMemo } from "react";

export const CartContext = createContext();

export const CartContainer = ({ children }) => {
  const [cart, setCart] = useState({});
  const [orderconfirmation, setOrderconfirmation] = useState(false);

  const addToCart = (id, image, price, name) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        image: image,
        price: price,
        name: name,
        quantity: prev[id] ? prev[id].quantity + 1 : 1,
      },
    }));
  };

  const handleIncrement = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: prev[id].quantity + 1,
        },
      };
    });
  };

  const handleDecrement = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const newQuantity = prev[id].quantity - 1;
      if (newQuantity === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: newQuantity,
        },
      };
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleOrderconfirmation = () => {
    setOrderconfirmation((prev) => !prev);
    if (orderconfirmation === true) {
      setCart({});
    }
  };

  const itemCounts = useMemo(() => {
    const counts = {};
    Object.keys(cart).forEach(id => {
      counts[id] = cart[id].quantity;
    });
    return counts;
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, handleIncrement, handleDecrement, itemCounts, removeItem, handleOrderconfirmation, orderconfirmation }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
