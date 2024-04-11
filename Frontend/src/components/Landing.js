import React from 'react'
import Footer from './landing/Footer';
import Navbar from './landing/Navbar';
import Reviews from './landing/Reviews';
import Features from './landing/Features';
import Examples from './landing/Examples';
import { Link } from 'react-router-dom'
import '../styles/landing.css';


export default function Landing(props) {

  document.body.style.backgroundColor = "#FFFFFF"


  return (
    <>
      <div className="landing scroll-smooth">
        <div className="up-part relative">
          <div className="navbar relative">
            <Navbar />
          </div>
          <div className="upper-part-content">

          </div>
        </div>
        <div className="landing-content">
          <div className="features">
            <Features />
          </div>
          <div className="examples">
            <Examples />
          </div>
          <div className="reviews">
            <Reviews />
          </div>
        </div>
        <div className="footer">
          <Footer showAlert={props.showAlert} />
        </div>
      </div>
      {/* <Link to='/chat'>
        <div className='bg-red-400 p-8 text-white w-fit cursor-pointer hover:bg-green-600'>chat Now </div>
      </Link> */}
    </>
  )
}
