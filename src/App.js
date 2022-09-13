import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";
import MapSection from "./components/map/Map";
import "./App.css";

function App() {
  const location = {
    address: "Road of Tunis, SEEDEVS Office",
    lat: 34.810432,
    lng: 10.763652,
  };
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
