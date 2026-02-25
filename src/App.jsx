import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Page/Navbar/Navbar'
import Nav2 from './Page/Nav2/Nav2';

import Footer from './Page/Footer/Footer';
import Home from './Page/Home/Home';
import MeetTeam from './Page/MeetTeam/MeetTeam';
import AboutUs from './Page/About/About';
import Contact from './Page/Contact/Contact'
import Collections from './Page/Collections/Collections';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Nav2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTeam />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<Collections />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;