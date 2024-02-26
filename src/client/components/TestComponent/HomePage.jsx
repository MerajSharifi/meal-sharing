// components/TestComponent/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h2 className="home-page-title">Welcome to Meal Sharing App</h2>
      <p className="home-page-subtitle">This is an app made in React.</p>
      <Link to="/meals" className="home-page-link">
        <button className="home-page-button">See More Meals</button>
      </Link>
    </div>
  );
};

export default HomePage;
