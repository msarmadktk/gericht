import React from 'react';
import { SubHeading } from '../../components';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding '>
    <div className='app__footer-news'>
      <SubHeading title="Newsletter" />
      <h1>Subscribe to Our Newsletter</h1>
      <p className='tex'>And never miss latest Updates!</p>

      <div className='app__footer-news_input'>
        <input type="email" name="" id="" placeholder='Email Address' />
        <button type='button'>Subscribe</button>
      </div>
    </div>

    <div className='app__footer-content'>

      <div className='app__footer-left'>
        <h2>Contact Us</h2>
        <h3>9 W 53rd St, New York, NY 10019, USA</h3>
        <h3>+1 212-344-1230</h3>
        <h3>+1 212-555-1230</h3>
      </div>
      <div className='app__footer-main'>
        <h1>Gerícht</h1>
        <div className='cenre'>
          <SubHeading title=' "The best way to find yourself is to lose yourself in the service of others." ' />
        </div>
        <div className='app__footer-icons'>
          <FaFacebookF style={{ fontSize: '24px', color: 'white' }} />
          <BsTwitterX style={{ fontSize: '24px', color: 'white' }} />
          <LuInstagram style={{ fontSize: '24px', color: 'white' }} />

        </div>
      </div>

      <div className='app__footer-right'>
        <h2>Working Hours</h2>
        <h3 className='te'>Monday-Friday:</h3>
        <h3>08:00 am -12:00 am</h3>
        <h3 className='te'>Saturday-Sunday: </h3>
        <h3>07:00am -11:00 pm</h3>
      </div>

    </div>
    <div className='app__copywrite'>
      <h3>2021 Gerícht. All Rights reserved.</h3>
    </div>
  </div>
);

export default Footer;
