import React from 'react';
import '../ui/Fonts.css';
import '../ui/Normalize.css';
import '../ui/swUI.css';

import Header from '../components/header/Header';
import Home from '../pages/private/home/Home';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
