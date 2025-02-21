import { desserts } from "./Dessert";
import { useCart } from "./Cartcount";
export const Cart = ()=>{
    const {cart} = useCart();
    const cartItems = Object.values(cart);
 
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="cart">
            <h1>Your Cart({totalItems}) </h1>
            {totalItems === 0 && <p>Your cart is empty</p>}
            {
                Object.keys(cart).map((id)=>{
                    const {image, name, price, quantity} = cart[id];
                    const totalPrice =  quantity * price.toFixed(2);
                    return (
                        <div key={id} className="cart-item">
                            <img src={image} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <p>${price.toFixed(2)}</p>
                                <p>Quantity: {quantity}</p>
                                <p>Total: {totalPrice} </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}


