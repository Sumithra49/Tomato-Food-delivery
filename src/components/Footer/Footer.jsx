import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta eum numquam? Maxime beatae numquam ab ipsam, cumque natus nulla corporis fugiat, animi, aut cum! Dolores libero odit culpa eligendi!</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>  
               
                </div>
                <div className="footer-content-right">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-256-7890</li>
    <li>contact@tomato.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com-All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer