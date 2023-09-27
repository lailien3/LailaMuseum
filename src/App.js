import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import DateTime from './components/DateTime';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <DateTime />
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;