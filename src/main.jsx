import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StoreContextProvider>
     <App />
     </StoreContextProvider>
   
    </BrowserRouter>
 
)
