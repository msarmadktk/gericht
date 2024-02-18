import React, { useRef } from 'react';
import { BsInstagram } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';


const gallery = [images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04];

const Gallery = () => {

  const scrollRef = useRef(null);


  const scroll = (direction) =>{
      const {current} = scrollRef;

      if(direction === 'left'){
        current.scrollLeft -= 300;
      }

      else{
        current.scrollLeft += 300;

      }
  } 
  return (
    <div className='app__gallery flex__center section__padding'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant' style={{fontSize : '50px'}}>Photo Gallery</h1>
        <p className='p__opensans' style={{color :'#AAA' , marginTopv : '2rem'  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {
            gallery.map((image , index) => (
              <div className='app__gallery-images_card flex__center' key={'gallery-image-${index+1}'}> 
                <img src={image} alt="" />
                <BsInstagram className='app__images-icon' />
              </div>
            ))
          }
        </div>

        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='app__gallery-icon' onClick={() => {scroll('left')}} />
          <BsArrowRightShort className='app__gallery-icon' onClick={() => {scroll('right')}} />
        </div>
      </div>
    </div>
  );

}

export default Gallery;
