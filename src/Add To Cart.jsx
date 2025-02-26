import { useCart } from "./Cartcount";
import { desserts } from "./Dessert";

export const AddToCart = ({ id }) => {
  const { handleDecrement, handleIncrement, addToCart, itemCounts } = useCart();
  const itemCount = itemCounts[id] || 0;

  const buttons = {
    'add': {
      fontSize: '10px',
      border: 'none',
      backgroundColor: 'transparent',
      color : itemCount > 0 ?  'white' : 'black'
    } 
      
  }
  
  

  return (
    <div className="addToCart" style={{backgroundColor: itemCount > 0 ? 'hsl(14, 86%, 42%)' : 'white'}}>
      {itemCount > 0 && (
        <button style={buttons.add} onClick={() => handleDecrement(id)}>-</button>
      )}
      {itemCount === 0 ? (
        <button style={buttons.add} onClick={() => addToCart(id, desserts[id].image.desktop, desserts[id].price, desserts[id].name)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 21 20">
<g fill="#C73B0F" clipPath="url(#a)">
<path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
<path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a">
<path fill="#fff" d="M.333 0h20v20h-20z"/>
</clipPath>
</defs>
</svg> Add to Cart
          </button>
      ) : (
        <span style={buttons.add}>{itemCount}</span>
      )}
      {itemCount > 0 && (
        <button style={buttons.add} onClick={() => handleIncrement(id)}>+</button>
      )}
    </div>
  );
};
