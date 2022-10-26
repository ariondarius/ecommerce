import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> © 2022 Your Store. All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram id="instagram" size={40}/>
        <AiOutlineTwitter id="twitter" size={40}/>
        <AiOutlineFacebook id="facebook" size={40}/>
      </p>
    </div>
  )
}

export default Footer
