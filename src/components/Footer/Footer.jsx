import React from 'react';
import s from'./Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.upper_footer}>
                <div className={s.left_upper_footer}>
                    ©2020
                </div>
                <div className={s.right_upper_footer}>
                    <a target="_blank" href="https://www.canadahelps.org/CharityProfilePage.aspx?CharityID=d39957">
                        <img alt="Donate Now Through CanadaHelps.org!" src="https://www.canadahelps.org/image/DonateNowLink/en/Donate4.png" height="32"/>
                    </a>
                </div>
            </div>
            <div className={s.lower_footer}>
                <i>For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.</i><br/>
                <b>Ephesians 2:8</b>
            </div>
        </div>
    );
}

export default Footer;