import React from 'react'
import Footer from './landing/Footer';
import Navbar from './landing/Navbar';
import Reviews from './landing/Reviews';
import Features from './landing/Features';
import Examples from './landing/Examples';
import PoweredBy from './landing/PoweredBy';
import UpperContentLanding from './landing/UpperContentLanding';
import '../styles/landing.css';


export default function Landing(props) {

  // Background color setup - always on light mode
  document.body.style.backgroundColor = "#FFFFFF"

  return (
    <>
      <div className="landing scroll-smooth">
        <div className="up-part relative">
          <div className="navbar relative">
            <Navbar />
          </div>
          <div className="upper-part-content">
            <UpperContentLanding />
          </div>
        </div>
        <div className="landing-content">
          <div className="features">
            <Features />
          </div>
          <div className="examples">
            <Examples />
          </div>
          {/* <div className="reviews">
            <Reviews />
          </div> */}
          <div className="powered-by">
            <PoweredBy />
          </div>
        </div>
        <div className="footer">
          <Footer showAlert={props.showAlert} />
        </div>
      </div>
    </>
  )
}
