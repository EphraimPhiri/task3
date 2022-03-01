import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MagazinesArticles from './components/pages/MagazinesArticles';
import Books from './components/pages/About';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/magazines&Articles' element={<MagazinesArticles/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
