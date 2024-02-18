import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className='app__laurels section__padding flex__center' id='awards'>
    
    <div className='app__laurels-logo'>
      <img src={images.logo} alt="" />
    </div>

    <div className='app__laurels-content'>
      <div className='app__laurels-content_heading'>
        <SubHeading title="Awards & recognition" />
        <h1>Our Laurels</h1>
      </div>

      <div className='app__laurels-content_awards'>
        <div className='app__laurels-content_awards01'>
          <div className='app__laurels-content_awards01-image'>
            <img src={images.award02} alt="" />

          </div>
          <div className='app__laurels-content_awards01-content'>
            <h3>Bib Gourmond</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

        </div>

        <div className='app__laurels-content_awards01'>
          <div className='app__laurels-content_awards01-image'>
            <img src={images.award01} alt="" />

          </div>
          <div className='app__laurels-content_awards01-content'>
            <h3>Rising Star</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

        </div>


        <div className='app__laurels-content_awards01'>
          <div className='app__laurels-content_awards01-image'>
            <img src={images.award05} alt="" />

          </div>
          <div className='app__laurels-content_awards01-content'>
            <h3>AA Hospitality </h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

        </div>

       

        <div className='app__laurels-content_awards01'>
          <div className='app__laurels-content_awards01-image'>
            <img src={images.award03} alt="" />

          </div>
          <div className='app__laurels-content_awards01-content'>
            <h3> Outstanding Chef </h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

        </div>
      
      </div>


    </div>

    <div className='app__laurels-image'>
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
