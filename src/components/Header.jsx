import React from 'react';
import logo from './../logo-header.svg';

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="container">
                <a href="#"><img src={logo} alt="logo" className="logo" /></a>
                <div className="nav">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Belief</a></li>
                        <li><a href="#">Ministries</a></li>
                        <li><a href="#">Our Elders</a></li>
                        <li><a href="#">Calendar</a></li>
                        <li><a href="#">Seremons</a></li>
                        <li><a href="#">Seeking God</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Give</a></li>
                    </ul>
                </div>
                <div className="social_media_links">
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/gracechurchverdun/?fref=ts">
                                <svg viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/channel/UCoixXI6nL1tk4ptE4BTmDTg/videos">
                                <svg viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://gracechurchverdun.ctrn.co/directory/">
                                <svg viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;