import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='top'>TOP</div>
      <section className='footer'>
        <div className='row footer-row'>
          <div className='footer-terms'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Use</a>
          </div>
          <div className='footer-copyright'>Copyright 2021</div>
          <div className='footer-social'>
            <ion-icon name='logo-facebook'></ion-icon>
            <ion-icon name='logo-instagram'></ion-icon>
            <ion-icon name='logo-instagram'></ion-icon>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
