import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <ul>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Donate</a>
      </ul>
    </div>
  );
}

const Products = () => {
  return (
    <div>
      <ul>
        <li>Bike</li>
        <li>Dress</li>
        <li>Lamp</li>
        <li>Poster</li>
      </ul>
    </div>
  );
}

export default App;
