import React, { useState, createContext } from 'react';
import './App.css';
import Experience from './Home/Layout/Experience';
import Hero from './Home/Layout/Hero';
import Navigator from './Home/Layout/Navigator';
import Projects from './Home/Layout/Projects';

export const menuDisplayContext = createContext(null)

function App() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`App p-2 border-box select-none ${dark ? 'dark' : ''}`}>
      <menuDisplayContext.Provider value={[menuOpen, setMenuOpen]}>
        <Hero dark={dark} setDark={setDark} />
        <Experience />
        <Projects />
        <Navigator dark={dark} setDark={setDark} />
      </menuDisplayContext.Provider>
    </div>
  );
}

export default App;
