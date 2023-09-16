import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mountains.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nurlan Osmonaliev</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="header__img-block">
          <img src={ME} alt="me" className='header__img'/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header