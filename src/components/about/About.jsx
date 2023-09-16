import React from 'react'
import './about.css'
import ME from '../../assets/waterfall.jpg'
import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" className='about__me-pic' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
            
            <article className='about__card'>
              <LuLanguages className='about__icon' />
              <h5>Languages</h5>
              <small>English (C1)</small> <br />
              <small>Russian (C1)</small> <br />
              <small>Kyrgyz (Native)</small>
            </article>

          </div>

          <p>
            I'm a frontend developer, crafting web applications with stunning user interfaces. My mission is to bring beauty and functionality to the online world, making every project memorable and efficient.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About