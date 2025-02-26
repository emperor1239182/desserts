import './App.scss'
import { AddToCart } from './Add To Cart';
import { desserts } from './Dessert';
import { Cart } from './Cart';
import {useCart} from './Cartcount'
import { Orderconfirmation } from './Orderconfirmation';

const App = ()=>{
  const {orderconfirmation} = useCart();
  const background ={
    backdropFilter: orderconfirmation ? 'blur(455px)' : '',
    zIndex: orderconfirmation ? '-1' : ''
  }
  return (
    <>
    <div className='container' style={background}>
    <h1 className='topic'>Desserts</h1>
    <Cart/>
      {
        desserts?.map((products)=>{
          return (
            <div key={products.id} className='dessert'>
              <div className='imageContainer'>
              <img src={products.image.desktop} alt={products.name}/>
              <AddToCart id={products.id} /> 
              </div>
              <p>{products.category}</p>
              <p> {products.name} </p>
              <p>${products.price.toFixed(2)} </p>
                 
            </div>
          );
        })
      } 
    </div>
    {orderconfirmation && <Orderconfirmation/>}
    </>
  )
}

export default App
