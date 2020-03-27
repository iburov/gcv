import React from 'react';
import './App.css';
import logo from './logo.png';

const App = () => {
  return (
    <div className = "App wrapper" >
      <div className="header">
        <img src={logo} alt="logo" className="logo"/>
        <div>Profile</div>
      </div>
      <div className="nav">
        <div href="#">Home</div>
        <div href="#">Products</div>
        <div href="#">About</div>
        <div href="#">Contact Us</div>
      </div>
      <div className="main">
        <div className = "profile_cover">
          <img src="https://img.andrewprokos.com/NYC-SKYLINE-FROM-BROOKLYN-NIGHT-BW-1100PX.jpg" alt="cover" className="cover_img" />
          <div className="profile_name_img">
            <img src="https://cdn130.picsart.com/291299731044201.png?type=webp&to=crop&r=256" alt="cover" className="profile_img" />
            <h2>Yan Odduone</h2>
          </div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
