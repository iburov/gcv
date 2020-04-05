import React from 'react';
import s from './Header.module.css';
import logo from './../../logo-header.svg';
import Nav from './Nav/Nav';
import SocialMediaLinks from './Nav/SocialMediaLinks/SocialMediaLinks';

const Header = () => {
    return (
        <div className={s.header} id="header">
            <div className={s.container}>
                <a href="#"><img src={logo} alt="logo" className={s.logo} /></a>
                <Nav />
                <SocialMediaLinks />
            </div>
        </div>
    );
}

export default Header;