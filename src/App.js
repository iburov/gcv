import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className = "App wrapper" >
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
