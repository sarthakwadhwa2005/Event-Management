import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Hackathon from './Hackathon';
import Sports from './Sports';
import Concerts from './Concerts';
import SocialEvents from './SocialEvents';
import AboutUs from './AboutUs';
import Organize from './Organize';
import Login from './Login'; 
import Signup from './Signup'; 
import Register from './Register'; 
import RegisterOrg from './registerorg'; 
import Success from './Success';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <h1>Evensta</h1>
          <nav>
            <Link to="/" className="nav-button">Home</Link>
            <div className="dropdown">
              <button className="nav-button dropdown-toggle">Events</button>
              <div className="dropdown-content">
                <Link to="/hackathon" className="dropdown-item">Hackathon</Link>
                <Link to="/sports" className="dropdown-item">Sports Event</Link>
                <Link to="/concerts" className="dropdown-item">Concerts</Link>
                <Link to="/social-events" className="dropdown-item">Social Events</Link>
              </div>
            </div>
            <Link to="/organize" className="nav-button">Organize</Link>
            <Link to="/about-us" className="nav-button">About Us</Link>
          </nav>
          <input type="text" placeholder="Search" className="search-box" />
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/social-events" element={<SocialEvents />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/organize" element={<Organize />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/registerorg" element={<RegisterOrg />} />  
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
