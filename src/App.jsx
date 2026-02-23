import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Page/Navbar/Navbar'
import Nav2 from './Page/Nav2/Nav2';

import Footer from './Page/Footer/Footer';
import Home from './Page/Home/Home';
import Shop from './Page/Shop/Shop';
import NewArrivals from './Page/NewArrivals/NewArrivals';
// import Collections from './components/Pages/Collections';
import MeetTeam from './Page/MeetTeam/MeetTeam';
import Blog from './Page/Blog/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Nav2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          {/* <Route path="/collections" element={<Collections />} /> */}
          <Route path="/meet-the-team" element={<MeetTeam />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;