import React from 'react';
import s from './Nav.module.css';
import NavButton from './NavButton/NavButton';

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavButton value="About Us" link="#" />
            <NavButton value="Our Beliefs" link="#" />
            <NavButton value="Ministries" link="#" />
            <NavButton value="Our Elders" link="#" />
            <NavButton value="Calendar" link="#" />
            <NavButton value="Seremons" link="#" />
            <NavButton value="Seeking God" link="#" />
            <NavButton value="Contact Us" link="#" />
            <NavButton value="Give" link="#" />
        </div>
    );
}

export default Nav;