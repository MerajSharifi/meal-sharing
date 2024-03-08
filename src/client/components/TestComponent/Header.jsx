import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={logoContainer}>
        <span role="img" aria-label="Meal Icon" style={logoStyle}>🥘</span>
        <h2 style={titleStyle}>Meal Sharing</h2>
      </Link>
    </header>
  );
}

const headerStyle = {
  width: "100%",
  backgroundColor: "#2ecc71",
  padding: "20px 0",
  textAlign: "center",
  color: "#fff",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

const logoStyle = {
  fontSize: "36px",
  marginRight: "10px",
};

const titleStyle = {
  fontSize: "24px",
  margin: "0",
  color: "white",
};

export default Header;
