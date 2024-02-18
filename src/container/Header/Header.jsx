import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app_header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase The New Flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dinning</h1>
      <h2 className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </h2>
      <button type='button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
