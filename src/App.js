import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import OurBeliefs from './components/OurBeliefs/OurBeliefs';
import Ministries from './components/Ministries/Ministries';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className = "App wrapper" >
        <Header />
        <div className="main">
          <Route path="/(|about-us)/" component={AboutUs} />
          <Route path="/our-beliefs" component={OurBeliefs} />
          <Route path="/ministries" component={Ministries} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
