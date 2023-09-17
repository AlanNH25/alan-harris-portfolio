
import './App.css';
import React from 'react'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

import Artwork from './components/pages/Artwork'
import Commissions from './components/pages/Commissions'
import Concepts from './components/pages/Concepts'
import Drawings from './components/pages/Drawings'
import Home from './components/pages/Home'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar/>
        </header>
        <div>
          <Routes>
            <Route path='/' exact element={<Artwork/>} />
            <Route path='/artwork' exact element={<Artwork/> } />
            <Route path='/concepts' element={<Concepts/>} />
            <Route path='/commissions' element={<Commissions/>} />
            <Route path='/drawings' element={<Drawings/>} />
          </Routes>
        </div>

        <br/>
        <br/>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
