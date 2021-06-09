import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola qué tal" />
    </div>
  );
}

export default App;
