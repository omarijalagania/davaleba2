import React from 'react';
import blockChain from '../assets/images/Blockchain-Teaser.png';
import icon from '../assets/images/icon.png';
import programming from '../assets/images/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.png';
import typing from '../assets/images/programmer-typing-working-laptop-programming-about-cyber-security_42708-776.png';
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='row'>
        <h1 className='setion-title'>services</h1>
        <div className='cards'>
          <div className='card'>
            <div className='card-image'>
              <img src={blockChain} alt='blockChain' />
            </div>
            <div className='card-logo'>
              <img src={icon} alt='icon' />
            </div>
            <div className='card-title'>Blockchains</div>
            <p className='card-description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloribus ipsum, ab dolor aperiam magni! ipsum dolor sit amet
              consectetur adipisicing elit. Quas doloribus ipsum, ab dolor
              aperiam magni!
            </p>
          </div>
          <div className='card'>
            <div className='card-image'>
              <img src={programming} alt='programming' />
            </div>
            <div className='card-logo'>
              <img src={icon} alt='icon' />
            </div>
            <div className='card-title'>Blockchains</div>
            <p className='card-description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloribus ipsum, ab dolor aperiam magni! ipsum dolor sit amet
              consectetur adipisicing elit. Quas doloribus ipsum, ab dolor
              aperiam magni!
            </p>
          </div>
          <div className='card'>
            <div className='card-image'>
              <img src={typing} alt='typing' />
            </div>
            <div className='card-logo'>
              <img src={icon} alt='icon' />
            </div>
            <div className='card-title'>Blockchains</div>
            <p className='card-description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloribus ipsum, ab dolor aperiam magni! ipsum dolor sit amet
              consectetur adipisicing elit. Quas doloribus ipsum, ab dolor
              aperiam magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
