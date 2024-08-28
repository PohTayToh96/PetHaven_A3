import React from 'react';
import { MainBanner } from '../components/Banner/MainBanner';

const Home = () => {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <MainBanner></MainBanner>
        <h1>Our Testimony</h1>
        <p>This is the home page of our SPA example.</p>
      </div>
    </div>
  );
};

export default Home
