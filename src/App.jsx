import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
