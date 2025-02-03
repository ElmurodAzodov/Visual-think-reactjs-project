import React from "react";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Visual Think</h1>
      <p>AI-based startup tools</p>
      <input type="text" placeholder="Compose your dream startup..." />
    </section>
  );
};

export default Hero;
