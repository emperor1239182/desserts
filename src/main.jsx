import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartContainer } from './Cartcount.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartContainer>
     <App />
    </CartContainer> 
  </StrictMode>
)