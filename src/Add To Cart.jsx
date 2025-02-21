
import { useCart } from "./Cartcount";
import { desserts } from "./Dessert";
export const AddToCart = (id) => {
     const {handleDecrement, handleIncrement, addToCart, itemCount} = useCart();
    return (
        <>
            <div className="add-to-cart">
                {itemCount > 0  &&(
                    <button onClick={handleDecrement}>-</button>
                )}
                {itemCount === 0 ? (
                    <button onClick={() => addToCart(id, desserts[id].image.desktop, desserts[id].price, desserts[id ].name)}>Add to Cart</button>
                ) : ({itemCount} )
                }
                    {itemCount > 0 &&(
                        <button onClick={handleIncrement}>+</button>
                    )}
                
            </div>
        </>
    )
}