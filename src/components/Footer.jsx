import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper_footer">
                <div className="left_upper_footer">
                    ©2020
                </div>
                <div className="right_upper_footer">
                    <a target="_blank" href="https://www.canadahelps.org/CharityProfilePage.aspx?CharityID=d39957">
                        <img alt="Donate Now Through CanadaHelps.org!" src="https://www.canadahelps.org/image/DonateNowLink/en/Donate4.png" height="32"/>
                    </a>
                </div>
            </div>
            <div className="lower_footer">
                <i>For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.</i><br/>
                <b>Ephesians 2:8</b>
            </div>
        </div>
    );
}

export default Footer;