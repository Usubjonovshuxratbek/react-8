import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';

function App() {

  return (
    <div className="App">
     <Header />
     <Menu />
     <Order />
    </div>
  );
}

export default App;
