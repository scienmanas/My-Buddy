import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css';
import Footer from './landing/Footer';

export default function Landing() {

  document.body.style.backgroundColor = "#FFFFFF"


  return (
    <>
      <div className="landing">
        <div className="navbar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, maiores modi! Culpa soluta illum cupiditate officiis molestiae, cumque tenetur incidunt voluptas libero distinctio dolore, suscipit tempore at? Non, laudantium temporibus!
        </div>
        <div className="landing-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsum aspernatur illo soluta deleniti sint obcaecati fugit. Illum sunt ab, vero excepturi perferendis cum pariatur obcaecati ex quis similique expedita?

        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      {/* <Link to='/chat'>
        <div className='bg-red-400 p-8 text-white w-fit cursor-pointer hover:bg-green-600'>chat Now </div>
      </Link> */}
    </>
  )
}
