import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Router from './router/Router.jsx';

const App = () => {
  return (
    <div className="App" style={{backgroundColor: '#E0FBFC', minHeight: '100vh'}}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter> 
    </div>
  );
}

export default App;
