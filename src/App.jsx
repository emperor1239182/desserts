import './App.scss'
import { AddToCart } from './Add To Cart';
import { desserts } from './Dessert';
import { Cart } from './Cart';


const App = ()=>{
  return (
    <>
    <div className='container'>
    <h1 className='topic'>Dessert</h1>
    <Cart/>
      {
        desserts?.map((products)=>{
          return (
            <div key={products.id} className='dessert'>
              <span className='imageContainer'>
              <img src={products.image.desktop} alt={products.name}/>
              <AddToCart className="add" id={products.id} /> 
              </span>
              <p> {products.name} </p>
              <p>${products.price.toFixed(2)} </p>
                 
            </div>
          );
        })
      }  
    </div>
    </>
  )
}

export default App
