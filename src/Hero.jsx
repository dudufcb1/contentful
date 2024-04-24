import React from 'react';
import heroimg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Airedale hard cheese mozzarella. Pecorino melted cheese port-salut
            emmental babybel cheese and wine melted cheese manchego.
          </p>
        </div>
        <div className="img-container">
          <img src={heroimg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
