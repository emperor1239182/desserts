import './App.scss'
import { AddToCart } from './Add To Cart';
import { desserts } from './Dessert';




const App = ()=>{
  return (
    <>
    <div className='container'>
    <h1 className='topic'>Dessert</h1>
      {
        desserts?.map((products)=>{
          return (
            <div key={products.id} className='dessert'>
              <img src={products.image.desktop} alt={products.name}/>
              <p> {products.name} </p>
              <p>${products.price.toFixed(2)} </p>
                <AddToCart id={products.id} />   
            </div>
          );
        })
      }
      {/* <Cart/>  */}
    </div>
    </>
  )
}

export default App
