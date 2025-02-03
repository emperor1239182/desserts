import './App.scss'
import Cart from './Cart'
import CounterButton from './Add To Cart';
import { useContext } from 'react';
import { CartCount } from './Cartcount';

function App() {
  const waffles = {
    id: 1,
    "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "s./assets/images/image-waffle-tablet.jpg",
            "desktop": "src/assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
  };

  const vanillaBean = {
    id: 2,
      "image": {
          "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
          "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
          "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
          "desktop": "src/assets/images/image-creme-brulee-desktop.jpg"
      },
      "name": "Vanilla Bean Crème Brûlée",
      "category": "Crème Brûlée",
      "price": 7.00
   
  };
  const macaronMix = {
    id: 3,
    "image": {
        "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
        "mobile": "./assets/images/image-macaron-mobile.jpg",
        "tablet": "./assets/images/image-macaron-tablet.jpg",
        "desktop": "src/assets/images/image-macaron-desktop.jpg"
    },
    "name": "Macaron Mix of Five",
    "category": "Macaron",
    "price": 8.00
 };
 const tiramisu = {
  id: 4,
  "image": {
      "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
      "mobile": "./assets/images/image-tiramisu-mobile.jpg",
      "tablet": "./assets/images/image-tiramisu-tablet.jpg",
      "desktop": "src/assets/images/image-tiramisu-desktop.jpg"
  },
  "name": "Classic Tiramisu",
  "category": "Tiramisu",
  "price": 5.50
};
const pistachio = {
  id: 5,
  "image": {
      "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
      "mobile": "./assets/images/image-baklava-mobile.jpg",
      "tablet": "./assets/images/image-baklava-tablet.jpg",
      "desktop": "src/assets/images/image-baklava-desktop.jpg"
  },
  "name": "Pistachio Baklava",
  "category": "Baklava",
  "price": 4.00
};
const lemon = {
  id: 6,
  "image": {
      "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
      "mobile": "./assets/images/image-meringue-mobile.jpg",
      "tablet": "./assets/images/image-meringue-tablet.jpg",
      "desktop": "src/assets/images/image-meringue-desktop.jpg"
  },
  "name": "Lemon Meringue Pie",
  "category": "Pie",
  "price": 5.00
};
const redVelvetCake = {
  id: 7,
  "image": {
      "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
      "mobile": "./assets/images/image-cake-mobile.jpg",
      "tablet": "./assets/images/image-cake-tablet.jpg", 
      "desktop": "src/assets/images/image-cake-desktop.jpg"
  },
  "name": "Red Velvet Cake",
  "category": "Cake",
  "price": 4.50
};
const saltedBrownie = {
  id: 8,
  "image": {
      "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
      "mobile": "./assets/images/image-brownie-mobile.jpg",
      "tablet": "./assets/images/image-brownie-tablet.jpg",
      "desktop": "src/assets/images/image-brownie-desktop.jpg"
  },
  "name": "Salted Caramel Brownie",
  "category": "Brownie",
  "price": 4.50
};
const vanillaPannaCotta = {
  id: 9,
  "image": {
      "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
      "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
      "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
      "desktop": "src/assets/images/image-panna-cotta-desktop.jpg"
  },
  "name": "Vanilla Panna Cotta",
  "category": "Panna Cotta",
  "price": 6.50
};

const {addToCart} = useContext(CartCount);

  return (
    <>
     <div className='container'>
     
    <Cart/>
    
    <span className='topic'>Desserts</span>
        <div className='dessert waffles'>
        <span style={{position: 'relative'}}>
          <img src={waffles.image.desktop}/>
          <CounterButton id={waffles.id} add={() => addToCart(waffles.name)} />

          </span>
          <p>{waffles.category}</p>
          <p>{waffles.name}</p>
          <p>${waffles.price}</p>
        </div>
        <div className='dessert'>
        <span style={{position: 'relative'}}>
          <img src={vanillaBean.image.desktop}/>
          <CounterButton id={vanillaBean.id} add={() => addToCart(vanillaBean.name)}/>
          </span>
          <p>{vanillaBean.category}</p>
          <p>{vanillaBean.name}</p>
          <p>${vanillaBean.price}</p>
        </div>
        <div className='dessert'>
        <span style={{position: 'relative'}}>
          <img src={macaronMix.image.desktop}/>
          <CounterButton id={macaronMix.id} add={() => addToCart(macaronMix.name)}/>
          </span>
          <p>{macaronMix.category}</p>
          <p>{macaronMix.name}</p>
          <p>${macaronMix.price}</p>
        </div>
        <div className='dessert tira'>
        <span style={{position: 'relative'}}>
          <img src={tiramisu.image.desktop}/>
          <CounterButton id={tiramisu.id} add={() => addToCart(tiramisu.name)}/>
          </span>
          <p>{tiramisu.category}</p>
          <p>{tiramisu.name}</p>
          <p>${tiramisu.price}</p>
        </div>
        <div className='dessert'>
        <span style={{position: 'relative'}}>
          <img src={pistachio.image.desktop}/>
          <CounterButton id={pistachio.id} add={() => addToCart(pistachio.name)}/>
          </span>
          <p>{pistachio.category}</p>
          <p>{pistachio.name}</p>
          <p>${pistachio.price}</p>
        </div>
        <div className='dessert'>
        <span style={{position: 'relative'}}>
          <img src={lemon.image.desktop}/>
          <CounterButton id={lemon.id} add={() => addToCart(lemon.name)}/>
          </span>
          <p>{lemon.category}</p>
          <p>{lemon.name}</p>
          <p>${lemon.price}</p>
        </div>
        <div className='dessert velvet'>
        <span style={{position: 'relative'}}>
          <img src={redVelvetCake.image.desktop}/>
          <CounterButton id={redVelvetCake.id} add={() => addToCart(redVelvetCake.name)}/>
          </span>
          <p>{redVelvetCake.category}</p>
          <p>{redVelvetCake.name}</p>
          <p>${redVelvetCake.price}</p>
        </div>
        <div className='dessert'>
        <span style={{position: 'relative'}}>
          <img src={saltedBrownie.image.desktop}/>
          <CounterButton id={saltedBrownie.id} add={() => addToCart(saltedBrownie.name)}/>
          </span>
          <p>{saltedBrownie.category}</p>
          <p>{saltedBrownie.name}</p>
          <p>${saltedBrownie.price}</p>
        </div>
        <div className='dessert'>
          <span style={{position: 'relative'}}>
          <img src={vanillaPannaCotta.image.desktop}/> 
          <CounterButton id={vanillaPannaCotta.id} add={() => addToCart(vanillaPannaCotta.name)}/>
          </span>
          <p>{vanillaPannaCotta.category}</p>
          <p>{vanillaPannaCotta.name}</p>
          <p>${vanillaPannaCotta.price}</p>
        </div>
     </div>
    </>
  )
}

export default App
