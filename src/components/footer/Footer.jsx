import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <h1>Web<span>X</span></h1>
        </div>
        <div className="footer_menu">
            <div><a href="#">Home</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Works</a></div>
            <div><a href="#">Contact</a></div>
        </div>
        <div className="footer_down">
            <h4>All rights reserved by <span>WebX</span></h4>
        </div>
    </div>
  )
}

export default Footer