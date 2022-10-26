import React from 'react'
import Link from 'next/link'

import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from'./'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const {showCart, setShowCart,totalQuantities}=useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/" >
        
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40.000000pt" height="40.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 80 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z m96 13 c22 -29
16 -43 -16 -43 -34 0 -34 0 -18 35 13 30 17 30 34 8z"/>
</g>
</svg>
    </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=> setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/> }
    </div>
  )
}

export default Navbar
