import { desserts } from "./Dessert";
import { useCart } from "./Cartcount";

export const Orderconfirmation = ()=>{
    const {cart, handleOrderconfirmation, orderConfirmation} = useCart();
    const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalOrders = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  

    return (
        <div className=" orderConfirmation">
            <p className="checkmark">✔</p>
            <h5 className="cartName" style={{ textAlign:'left'}}>Order Confirmed </h5>
            <p style={{ textAlign:'left', color:'grey', fontSize:'9px'}}>We hope you enjoy your food!</p>
            
            {
                Object.keys(cart).map((id)=>{
                    const {image, name, price, quantity} = cart[id];
                    const totalPrice =  quantity * price.toFixed(2);
                    
                
                    return (
                        <div key={id} className="cartList">
                            <img src={image} alt={name} style={{width:'40px', height:'30px'}} />
                            
                                <p style={{fontSize:'9px', fontWeight:'bold'}}>{name}</p>
                                <p style={{fontSize:'9px'}}>${price.toFixed(2)}</p>
                                <p style={{fontSize:'9px', color:'hsl(14, 86%, 42%)'}}> {quantity}X</p>
                                <p style={{fontSize:'9px', fontWeight:'bold'}}>Total: ${totalPrice} </p>
                        </div>
                       
                    );
                })
            }
            {totalItems > 0 &&
            <>
            <div className="sum">
            <p style={{fontSize: '9px', color: 'grey'}}>Order Total</p>
            <p style={{fontSize: '14px', fontWeight:'bolder'}}>${totalOrders.toFixed(2)} </p>
        </div>
        <button className="newOrder" onClick={handleOrderconfirmation}>Start New Order</button>
        </>
            }
        
            
        </div>
    );
}