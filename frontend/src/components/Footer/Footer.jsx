import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
               <img src={assets.logo} alt="" />
               <p>Hungry but don’t feel like cooking? Order from Tomato and enjoy hot, delicious food from top restaurants, delivered in no time! 🍽️🔥</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
             <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>
            <div className='footer-content-right'>
                 <h2>Get in Touch !!</h2>
                 <ul>
                    <li>+1-2398034527</li>
                    <li>manthanhanchate1703@gmail.com</li>
                 </ul>
            </div>
           
            
        </div>
        <hr />
        <p className="footer-copyright">CopyRight 2024 @ Tomato.com - All Right Reserved </p>
         
    </div>
  )
}

export default Footer