import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import aboutImage1 from './images/about.png';
import aboutImage2 from './images/download.png';
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About image={aboutImage1} title='comes with all you need for daily life' button='Get The App' />
      <Presentation />
      <About image={aboutImage2} title='download and get the app now!' button='Get The App' />
      <Contact />
    </div>
  );
}

export default App;
