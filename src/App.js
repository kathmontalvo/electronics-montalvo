import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Router from './router/Router.jsx';
import CartProvider from './context/CartContext'

const App = () => {
  return (
    <div className="App" style={{backgroundColor: '#E0FBFC', minHeight: '100vh'}}>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter> 
      </CartProvider>
    </div>
  );
}

export default App;
