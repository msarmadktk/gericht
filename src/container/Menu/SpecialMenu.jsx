import React from 'react';
import { SubHeading } from '../../components';
import { MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-heading'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-container flex__center'>
      <div className='app__specialMenu-left'>
        <h3>Juice & Drink</h3>
        <MenuItem title="Chapel Hill Shi" price="$56" text="AU | Bottle" />
        <MenuItem title="Catena Malbec" price="$59" text="AR | Bottle" />
        <MenuItem title="La Vieille Rosé" price="$44" text="FR | 750 ml" />
        <MenuItem title="Rhino Pale Ale" price="$31" text="CA | 750 ml" />
        <MenuItem title="Irish Guinness" price="$26" text="IE | 750 ml" />
      </div>
      <div className='app__specialMenu-image'>
        <img src={images.menu} alt="" />
      </div>
      <div className='app__specialMenu-right'>
        <h3>Cocktails</h3>
        <MenuItem title="Aperol Spritz" price="$20" text="Aperol | Villa Marchesi | soda | 30ml" />
        <MenuItem title="Dark Stormy" price="$16" text="Dark rum | Ginger beer | Slice of lime. " />
        <MenuItem title="Daiqui Equrt" price="$10" text="Rum | Citrus juice | Sugar" />
        <MenuItem title="Old Fashioned" price="$31" text="Bourbon | Brown sugar | Angostura Bitters" />
        <MenuItem title="Negroni Fashi" price="$26" text="Gin | Sweet Vermouth | Campari | Orange" />
      </div>
    </div>

    <div className='app__menu-button'>
      <button type='button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
