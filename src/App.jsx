import { useState } from 'react'
import './App.scss'

function App() {
  const [cartCount, setCount] = useState(0);
  const waffles = {
    "image": {
            "thumbnail": ".src/assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "src/assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
  };

  const vanillaBean = {
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

  
  return (
    <>
     <div className='container'>
     <h1 className='topic'>Desserts</h1>
        <div className='dessert'>
          <img src={waffles.image.desktop}/>
          <p>{waffles.category}</p>
          <p>{waffles.name}</p>
          <p>${waffles.price}</p>
        </div>
        <div className='dessert'>
          <img src={vanillaBean.image.desktop}/>
          <p>{vanillaBean.category}</p>
          <p>{vanillaBean.name}</p>
          <p>${vanillaBean.price}</p>
        </div>
        <div className='dessert'>
          <img src={macaronMix.image.desktop}/>
          <p>{macaronMix.category}</p>
          <p>{macaronMix.name}</p>
          <p>${macaronMix.price}</p>
        </div>
        <div className='dessert'>
          <img src={tiramisu.image.desktop}/>
          <p>{tiramisu.category}</p>
          <p>{tiramisu.name}</p>
          <p>${tiramisu.price}</p>
        </div>
        <div className='dessert'>
          <img src={pistachio.image.desktop}/>
          <p>{pistachio.category}</p>
          <p>{pistachio.name}</p>
          <p>${pistachio.price}</p>
        </div>
        <div className='dessert'>
          <img src={lemon.image.desktop}/>
          <p>{lemon.category}</p>
          <p>{lemon.name}</p>
          <p>${lemon.price}</p>
        </div>
        <div className='dessert'>
          <img src={redVelvetCake.image.desktop}/>
          <p>{redVelvetCake.category}</p>
          <p>{redVelvetCake.name}</p>
          <p>${redVelvetCake.price}</p>
        </div>
        <div className='dessert'>
          <img src={saltedBrownie.image.desktop}/>
          <p>{saltedBrownie.category}</p>
          <p>{saltedBrownie.name}</p>
          <p>${saltedBrownie.price}</p>
        </div>
        <div className='dessert'>
          <img src={vanillaPannaCotta.image.desktop}/>
          <p>{vanillaPannaCotta.category}</p>
          <p>{vanillaPannaCotta.name}</p>
          <p>${vanillaPannaCotta.price}</p>
        </div>

     </div>
     <button onClick={()=> setCount((c)=> c + 1)} className='add'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>Add to cart</button>
    </>
  )
}

export default App
