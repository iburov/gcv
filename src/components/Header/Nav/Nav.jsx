import React from 'react';
import s from './Nav.module.css';
import NavButton from './NavButton/NavButton';

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavButton value="About Us" link="/about-us" />
            <NavButton value="Our Beliefs" link="/our-beliefs" />
            <NavButton value="Ministries" link="/ministries" />
            <NavButton value="Our Elders" link="/our-elders" />
            <NavButton value="Calendar" link="/calendar" />
            <NavButton value="Seremons" link="/seremons" />
            <NavButton value="Seeking God" link="/seeking-god" />
            <NavButton value="Contact Us" link="contact-us" />
            <NavButton value="Give" link="https://www.canadahelps.org/en/dn/30529" target="_blank" style="underline"/>
        </div>
    );
}

export default Nav;