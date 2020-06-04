import React, { Component, Suspense } from 'react';
import './i18n';
import Hello from './components/Hello';
import ThankYou from './components/Thankyou';
import LanguageSelector from './components/LanguageSelector';
import TheLayout from './components/TheLayout'
import './App.css';

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <TheLayout />
      </Suspense>
    </div>
  );
};

export default App;
