import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = ({
  AddLink,
  BuyLink
}) => {
  return (
    <>
      <div className="footer-btn">
        <div className="foot-btn">
          <Link to={AddLink} className='btn btn-light w-100 addtocard'>Add To Cart</Link>
          <Link to={BuyLink} className='btn bg-warning w-100 buynow'>Buy Now</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
