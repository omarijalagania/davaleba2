import React, { useState } from 'react';
import maps from '../assets/images/Google-Maps-Frontpage.png';
const Contacts = () => {
  const [active, setActive] = useState(true);

  const toggleHandler = (e) => {
    if (
      e.target.classList.contains('contact-') ||
      e.target.classList.contains('map-')
    ) {
      setActive(!active);
      console.log(active);
    }
  };
  //active-title . active-contact
  return (
    <>
      <section className='contact'>
        <div className='row'>
          <div className='contact-headers' onClick={(e) => toggleHandler(e)}>
            <div className='contact-header'>
              <h1 className={active ? 'contact- active-title' : 'contact-'}>
                contact us
              </h1>
              <div
                className={
                  active ? 'active-contact' : 'contact-line-grey'
                }></div>
            </div>
            <div className='map-header'>
              <h1 className={active ? 'map-' : 'active-title'}>Map</h1>
              <div
                className={
                  active ? 'contact-line-grey' : 'active-contact'
                }></div>
            </div>
          </div>
          <div className='contact-forms'>
            <div className='contact-form'>
              <form>
                <fieldset
                  className='fieldset'
                  disabled={active ? '' : 'disabled'}>
                  <input
                    className='inputs'
                    type='text'
                    placeholder='Your Name'
                  />
                  <input
                    className='inputs'
                    type='email'
                    placeholder='Your Email *'
                    required
                  />
                  <input
                    className='inputs'
                    type='tel'
                    placeholder='Your Phone *'
                  />
                  <input className='inputs' type='text' placeholder='Subject' />
                  <textarea
                    className='inputs'
                    rows='4'
                    cols='30'
                    placeholder='Your Message *'></textarea>
                  <button className='submit-button' type='submit'>
                    {' '}
                    Send Message
                  </button>
                </fieldset>
              </form>
            </div>
            <div className='map'>
              <div
                className='google-map'
                style={{ opacity: `${active ? '0.5' : '1'}` }}>
                <img src={maps} alt='map' />
              </div>
              <div className='contact-domain'>contact@domain.com</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
