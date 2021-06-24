import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Partners from './components/Partners';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <AboutUs />
      <Team />
      <Partners />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
