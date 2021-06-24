import React from 'react';
import rectangle from '../assets/images/Rectangle 20.png';
import blackWhite from '../assets/images/black-white-responsive-devices-mockup-responsive-modern-web-design_72104-3689.png';
import tablet from '../assets/images/computer-tablet-smartphone-showing-responsive-website-3d-rendering_72104-3802.png';
import device from '../assets/images/black-white-responsive-devices-mockup-responsive-modern-web-design_72104-3689.png';
import rec5z from '../assets/images/Rectangle 5z.png';
const Portfolio = () => {
  return (
    <>
      <section className='portfolio' id='projects'>
        <div className='row'>
          <div className='portfolio-container'>
            <h1 className='portfolio-title'>portfolio</h1>
            <div className='portfolio-icons'>
              <img src={rectangle} />
              <img src={rectangle} />
            </div>
          </div>
        </div>
        <div className='portfolio-card-container'>
          <div className='row portfolio-card-row'>
            <div className='portfolio-card'>
              <img src={blackWhite} alt='portfolio image' />
              <div className='portfolio-top-text'>
                <h3>Project Name</h3>
                <div className='category'>
                  <p>Category</p>
                  <div className='line'></div>
                </div>
              </div>
            </div>
            <div className='portfolio-card-no-hover'>
              <img src={tablet} alt='portfolio image' />
              <div className='portfolio-top-text-no-hover'>
                <h3>Project Name</h3>
              </div>
            </div>
            <div className='portfolio-card-no-hover'>
              <img src={device} alt='portfolio image' />
            </div>
          </div>
        </div>

        <div className='path'>
          <img src={rec5z} />
          <div className='view-all'>
            <p>View All</p>
            <div className='view-line'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
