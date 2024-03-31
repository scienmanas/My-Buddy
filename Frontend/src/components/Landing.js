import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {


  return (
    <div className='landing'>
      <div className='landing-content'>
        <div className='landing-content-text'>
          <h1 className='landing-content-text-title'>Welcome to My buddy </h1>
          <p className='landing-content-text-description'>Chat with ai</p>
        </div>
        <div className='landing-content-image'>
          <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='landing' />
        </div>
      </div>
      <Link to='/chat'>
        <div className='bg-red-400 p-8 text-white w-fit cursor-pointer hover:bg-green-600'>chat Now </div>
      </Link>
    </div>
  )
}
