import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Products from './Products.js';

const App = () => {
  return (
    <div className = "App" >
      <Header />
      <Products />
    </div>
  );
}

export default App;
