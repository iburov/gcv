import React from 'react';
import s from './NavButton.module.css';
import { NavLink } from 'react-router-dom';

const NavButton = (props) => {
    return (
        <div className={`${s.nav_button} ${props.style}`}>
            <NavLink to={props.link} activeClassName={s.active} target={props.target}>{props.value}</NavLink>
        </div>
    );
}

export default NavButton;