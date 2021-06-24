import React, { useState } from 'react';
import scrollImg from '../assets/images/scroll.png';
import bg from '../assets/images/bg.png';
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
const Header = () => {
  const [i, setI] = useState(0);
  const [slideBtn, setSlideBtn] = useState(false);
  const [slideBtn2, setSlideBtn2] = useState(false);
  const [arr, setArr] = useState([bg, bg1, bg2, bg3]);
  const [activeBtn, setActiveBtn] = useState('slide-btn-active');
  const slideHandler = () => {
    if (arr.length - 1 > i) {
      setI((prev) => prev + 1);
    } else {
      setI(0);
    }
    setSlideBtn(true);
    setSlideBtn2(false);
  };

  const slideMinusHandler = () => {
    if (arr.length > i && i > 0) {
      setI((prev) => prev - 1);
    } else {
      setI(arr.length - 1);
    }
    setSlideBtn2(true);
    setSlideBtn(false);
  };

  return (
    <>
      <header className='header' style={{ backgroundImage: `url(${arr[i]})` }}>
        <div className='row'>
          <nav className='nav'>
            <div className='logo'>
              <a href='/'>LOGO</a>
            </div>
            <ul className='nav-list'>
              <li className='nav-links'>
                <a href=''>ABOUT</a>
              </li>
              <li className='nav-links'>
                <a href='#services'>SERVICES</a>
              </li>
              <li className='nav-links'>
                <a href='#projects'>PROJECTS</a>
              </li>
              <li className='nav-links'>
                <a href='#team'>TEAM</a>
              </li>
              <li className='nav-links'>
                <a href=''>CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className='main-title'>
            <h1>We do software development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dolorem minus, ratione sapiente iste eius.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis dolorem minus,
              ratione sapiente iste.
            </p>
            <div className='buttons'>
              <button className='btn full'>read more</button>
              <button className='btn empty'>contact us</button>
            </div>
          </div>
        </div>
        <div className='slider-nav'>
          <div className='slider-scroll'>
            <img src={scrollImg} alt='scroll' />
          </div>
          <div className='slider-buttons'>
            <button
              onClick={() => slideMinusHandler()} //slide-btn-active
              className={
                slideBtn2
                  ? `slide-btn  left ${slideBtn2 && activeBtn}`
                  : `slide-btn  left `
              }>
              <ion-icon name='chevron-back-outline'></ion-icon>
            </button>
            <button
              onClick={() => slideHandler()}
              className={
                slideBtn
                  ? `slide-btn right ${slideBtn && activeBtn} `
                  : 'slide-btn right'
              }>
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
