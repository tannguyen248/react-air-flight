import React, { Component, Suspense } from 'react'
import './i18n'
import Hello from './components/Hello'
import ThankYou from './components/Thankyou'
import LanguageSelector from './components/LanguageSelector'

const App = () => {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
        </Suspense>
      </div>
    )
}

export default App