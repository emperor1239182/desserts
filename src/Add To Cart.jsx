import { useCart } from "./Cartcount";
import { desserts } from "./Dessert";

export const AddToCart = ({ id }) => {
  const { handleDecrement, handleIncrement, addToCart, itemCounts } = useCart();
  const itemCount = itemCounts[id] || 0;

  return (
    <div className="add-to-cart">
      {itemCount > 0 && (
        <button onClick={() => handleDecrement(id)}>-</button>
      )}
      {itemCount === 0 ? (
        <button onClick={() => addToCart(id, desserts[id].image.desktop, desserts[id].price, desserts[id].name)}>Add to Cart</button>
      ) : (
        <span>{itemCount}</span>
      )}
      {itemCount > 0 && (
        <button onClick={() => handleIncrement(id)}>+</button>
      )}
    </div>
  );
};
