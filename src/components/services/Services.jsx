import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Online Marketplace </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Weather Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Task Management System (Task Organizer)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Shopping Cart Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interior Design Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And many other different projects</p>
            </li>
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

              </div>
    </section>
  )
}

export default Services