import React from 'react';
import meeting from '../assets/images/business-team-manager-meeting_183219-11.png';
const AboutUs = () => {
  return (
    <>
      <section className='about-us'>
        <h1 className='setion-title'>about us</h1>
        <div className='row'>
          <div className='about-container'>
            <div className='about-text'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nulla molestias accusamus illum! Nisi soluta assumenda
                officia architecto natus, exercitationem ullam accusantium neque
                reiciendis? Eligendi deserunt quae voluptates, a iusto, aliquam
                saepe perferendis asperiores cupiditate obcaecati nisi cumque
                placeat esse sequi. Facilis quis molestias optio vel,
                praesentium id illum a!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda nulla molestias accusamus illum!
                Nisi soluta assumenda officia architecto natus, exercitationem
                ullam accusantium neque reiciendis? Eligendi deserunt quae
                voluptates, a iusto, aliquam saepe perferendis asperiores
                cupiditate obcaecati nisi cumque placeat esse sequi. Facilis
                quis molestias optio vel, praesentium id illum a!
              </p>
            </div>
            <img className='about-image' src={meeting} alt='image' />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
