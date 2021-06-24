import React from 'react';
import rec20 from '../assets/images/Rectangle 20.png';
import glasses from '../assets/images/creative-successful-european-businessman-red-t-shirt-round-trendy-glasses_176420-24321 (1).png';
import smile from '../assets/images/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.png';
import portrait from '../assets/images/portrait-smiling-businessman-dressed-suit_171337-135.png';

const Team = () => {
  return (
    <>
      <section className='our-team' id='team'>
        <div className='row'>
          <div className='portfolio-container'>
            <h1 className='portfolio-title team-title'>our team</h1>
            <div className='portfolio-icons team'>
              <img src={rec20} />
              <img src={rec20} />
            </div>
          </div>
          <div className='our-team-container'>
            <div className='our-team-card'>
              <div className='team-image-box'>
                <img src={glasses} alt='glasses' />
              </div>
              <h4 className='team-member-name'>Giorgi Giorgadze</h4>
              <p className='team-member-position'>Graphic Designer</p>
            </div>
            <div className='our-team-card'>
              <div className='team-image-box'>
                <img src={smile} alt='smile' />
              </div>
              <h4 className='team-member-name'>Eka Shanidze</h4>
              <p className='team-member-position'>CEO</p>
            </div>
            <div className='our-team-card'>
              <div className='team-image-box'>
                <img src={portrait} alt='portrait' />
              </div>
              <h4 className='team-member-name'>Giorgi Giorgadze</h4>
              <p className='team-member-position'>Web Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
