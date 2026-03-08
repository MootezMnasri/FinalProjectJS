import React from 'react';
import { Navbar } from './Navbar';
import MainPage from './MainPage';

// Simple app wrapper to render Navbar and MainPage for a basic landing flow
export function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
