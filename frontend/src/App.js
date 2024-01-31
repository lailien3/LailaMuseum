import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Art from './components/pages/Art';
import Cats from './components/pages/Cats';
import Plants from './components/pages/Plants';
import Code from './components/pages/Code';
import Game from './components/pages/Game';
import SignUp from './components/pages/SignUp';
import DateTime from './components/DateTime';
import Crystals from './components/pages/Crystals';

function App() {
  return (
      <Router>
        <DateTime />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/art' element={<Art/>} />
          <Route path='/cats' element={<Cats/>} />
          <Route path='/plants' element={<Plants/>} />
          <Route path='/code' element={<Code/>} />
          <Route path='/crystals' element={<Crystals/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>

      </Router>
  );
}

export default App;