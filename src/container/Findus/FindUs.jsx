import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import  '../../container/Findus/findus.css'

const FindUs = () => (
  <div className='app__findus section__padding flex__center' id='contact'>
    <div className='app__findus-content'>
        <SubHeading title= "Contact" />
        <h1>Find Us</h1>
        <p className='text'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h2>Opening Hours</h2>
        <h3>Mon - Fri: 10:00 am - 02:00 am</h3>
        <h3>Sat - Sun: 10:00 am - 03:00 am</h3>
    </div>

    <div className='app__findus-image flex__center'>
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
