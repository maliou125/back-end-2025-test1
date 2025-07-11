import React from 'react'
import './NewsLetter.css'

const NewsLatter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter an stay updated</p>
      <div>
        <input type="email" placeholder='Enter Your Email ' />
        <button>Subscribe</button>
      </div>     
    </div>
  )
}

export default NewsLatter
