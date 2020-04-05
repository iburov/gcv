import React from 'react';
import s from './NavButton.module.css';

const NavButton = (props) => {
    return (
        <div className={s.nav_button}>
            <a href={props.link}>{props.value}</a>
        </div>
    );
}

export default NavButton;