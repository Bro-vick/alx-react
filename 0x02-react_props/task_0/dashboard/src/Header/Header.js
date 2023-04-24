import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <>
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashdoard</h1>
        </div>
    </>
  );
}

export default Header