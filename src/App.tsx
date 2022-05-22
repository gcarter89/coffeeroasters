import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function handleHamburgerClick(event:React.MouseEvent) {
        event.preventDefault()
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
      
      <>
        <Header handleHamburgerClick={handleHamburgerClick} hamburgerOpen={hamburgerOpen} />
        <main>
            {/* <Home /> */}
            <About />
        </main>
        <Footer />
      </>
  );
}

export default App;
