import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import OurBeliefs from './components/OurBeliefs/OurBeliefs';

const App = () => {
  return (
    <div className = "App wrapper" >
      <Header />
      <AboutUs />
      {/* <OurBeliefs /> */}
      <Footer />
    </div>
  );
}

export default App;
