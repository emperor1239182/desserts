import { createContext, useRef, useState, useContext } from "react";
export const CartContext = createContext();

export const CartContainer = ({ children })=>{
    const [cart, setCart] = useState({});
    const [itemCount, setItemCount] = useState(0);
    const count = useRef(0);

    const addToCart = (id, image, price, name) => {
        setCart((prev)=>{
            const updatedCart = {
                ...prev,
                [id]: {
                    image: image,
                    price: price,
                    name: name,
                    quantity: prev[id] ? prev[id].quantity + 1 : 1
                }
            }
            count.current = Object.values(updatedCart).reduce((total, item) => total + item.quantity, 0);
            return updatedCart;
        });
        setItemCount((c) => {
            return c + 1;
        });
    };

const handleIncrement = ()=>{
    setItemCount((c) => {
        return c + 1;
    });
};

const handleDecrement = ()=>{
    setItemCount((c) => {
        return c - 1;
    });
};

return ( 
    <>
    <CartContext.Provider value={{cart, addToCart, itemCount, handleIncrement, handleDecrement}}>
        {children}
    </CartContext.Provider>
    </>
)

}
export const useCart = () => {
    return useContext(CartContext);
  };