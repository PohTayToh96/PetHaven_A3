import React from 'react';
import DogImage from '../../../public/images/dog.png';
import '../components.css';

export const MainBanner = () => {
  return (
    <div className='Banner-container'>
        <img src={DogImage} alt="main banner" className='bannerdog'></img>
        <div className="center_text">
          <h3 className='title'>Welcome to Pet Haven</h3>
        </div>
    </div>
  )
}
