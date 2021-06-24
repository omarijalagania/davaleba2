import React from 'react';
import bitcoin from '../assets/images/bitcoin-22508.png';
import slack from '../assets/images/5cb480b85f1b6d3fbadece78.png';
import evanto from '../assets/images/Envato_logo.png';
import cisco from '../assets/images/1280px-Cisco_logo.svg.png';
const Partners = () => {
  return (
    <>
      <section className='partners'>
        <div className='row'>
          <h1 className='setion-title'>partners</h1>
          <div className='partners-cards-container'>
            <div className='partners-card'>
              <img src={bitcoin} alt='bitcoin' />
            </div>
            <div className='partners-card'>
              <img src={slack} alt='slack' />
            </div>
            <div className='partners-card'>
              <img src={evanto} alt='evanto' />
            </div>
            <div className='partners-card'>
              <img src={cisco} alt='cisco' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
