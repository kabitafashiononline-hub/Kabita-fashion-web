import React from 'react';
import Slider from '../Slider/Slider'
import Welcome from '../Welcome/Welcome';
import Featured from '../Featured/Featured';
import CustomerRating from '../CustomerRating/CustomerRating';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <Slider />
      <Welcome />
      <Featured />
      <CustomerRating />
    </main>
  );
};

export default Home;