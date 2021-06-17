import React from 'react';
// import ItemListContainer from './screens/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './screens/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
