import { Route, Routes } from 'react-router-dom'
import "./styles/app.css";
import Home from './views/Home';
import About from './views/About';
import Pokemon from './views/Pokemon';
import NotFound from './views/NotFound';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App