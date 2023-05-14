import React from 'react';
import Profile from './Profile/Profile.jsx'
import Footer from './Footer/Footer.jsx'
import './Home.css'
import Header from '../Home/Header/Header.jsx'

export default function Home(props) {
  return (
    <div className="home-container" id='Home'>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

