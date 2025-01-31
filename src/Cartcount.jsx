import { createContext, useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

export const CartCount = createContext();

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => setItemCount((prev) => prev + 1);
  const handleDecrement = () => setItemCount((prev) => Math.max(prev - 1, 0));

  return (
    <CartCount.Provider value={{ itemCount, handleIncrement, handleDecrement }}>
      {children}
    </CartCount.Provider>
  );
};

// ✅ Fix ESLint warning
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
