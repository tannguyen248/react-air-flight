import React, { Suspense } from 'react';
import './i18n';
import TheLayout from './components/TheLayout';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Partners from './components/Partners';
import MessengerContainer from './components/MessengerContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <TheLayout>
          <AboutUs />
          <Highlights />
          <Features />
          <Partners />
        </TheLayout>
        <MessengerContainer />
      </Suspense>
    </div>
  );
};

export default App;
