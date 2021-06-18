import React, { useState } from 'react'
import './header.css'
import Image from '../../../images/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IoMdCall, IoLogoWhatsapp } from 'react-icons/io'
import { Nav, Navbar } from 'react-bootstrap'
import { BiChevronDown } from 'react-icons/bi'
import { IoIosMenu } from 'react-icons/io'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'





function Header() {

  const [openDrawer, setDrawer] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)


  return (
    <>
      <div className='mainHead'>
        <div style={{ height: `${openDrawer === false ? '0' : '100vh'}`, overflow: 'hidden' }} className='rsponsiveHead'>
          <div className='responsiveMenu'>
            <div className='crossIconDiv' onClick={() => { setDrawer(false) }}>
              <AiOutlineClose size='40' className='crossIcon' />
            </div>
            <div style={openAbout === false ? { height: '81px' } : { height: '525px' }} className='aboutComplete'>
              <div onClick={() => { setOpenAbout(openAbout === false ? true : false) }} className="responsiveMenuItem">
                CATEGORIES
                            <BiChevronDown size='25' style={{ marginLeft: '5px', float: 'right', marginRight: '60px' }} />

              </div>
              <div className="responsiveMenuItemAbout">
                Men Fashion
              </div>
              <div className="responsiveMenuItemAbout">
                Women Fashion
              </div>
              <div className="responsiveMenuItemAbout">
                Automobile and Motor Bikes
              </div>
              <div className="responsiveMenuItemAbout ">
                Mobile Accessories
              </div>
              <div className="responsiveMenuItemAbout">
                New and Unique
              </div>
              <div className="responsiveMenuItemAbout">
                Home Appliances
              </div>
              <div className="responsiveMenuItemAbout">
                Watch Bags and Jewelery
              </div>
              <div className="responsiveMenuItemAbout">
                Health and Beauty

              </div>
              <div className="responsiveMenuItemAbout">
                Home and Lights
              </div>
              <div className="responsiveMenuItemAbout">
                Baby Products
              </div>
              <div className="responsiveMenuItemAbout last">
                Gift Center
              </div>
            </div>

            <div className='responsiveMenuItem'>
              ABOUT US
            </div>

            <div className='responsiveMenuItem'>
              CONTACT
            </div>

          </div>
        </div>

        <img src={Image} width='150px' alt="" style={{ paddingTop: '10px', paddingBottom: '10px' }} />
        <div className='menu'>

          <div className='showing' style={{ position: 'relative', height: '100%' }}>
            <div className='not-active'>
              <div className='activeBorder'></div>
              <p>CATEGORIES</p>
              <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
            </div>
            <div className='sub-menu'>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p className='text'>Men Fashion</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Women Fashion</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Automobile and Motor Bikes</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Mobile Accessories</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>New and Unique</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Home Appliances</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Watch Bags and Jewelery</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Health and Beauty</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Home and Lights</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Baby Products</p>
              </div>
              <div className='sub'>
                <div className='onHoverShow'></div>
                <p>Gift Center</p>
              </div>
            </div>
          </div>

          <div className='not-active'>
            <div className='activeBorder'></div>
            <p>ABOUT US</p>
          </div>

          <div className='not-active'>
            <div className='activeBorder'></div>
            <p>Contact</p>
          </div>
        </div>
        <div className='icons'>
          <a className='fb-icon' >
            <FaFacebookF size='19' />
          </a>
          <a className='twi-icon'>
            <FaTwitter size='19' />
          </a>
          <a className='insta-icon'>
            <FaInstagram size='19' />
          </a>
        </div>
        <div className='menuBtn' onClick={() => setDrawer(true)}>
          <IoIosMenu className='menuIcon' size='50' />
        </div>

      </div>
    </>

  )
}

export default Header;
