import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/online-shopping.png'
import IMG2 from '../../assets/stroyka-store.png'
import IMG3 from '../../assets/weather-app.png'
import IMG4 from '../../assets/interior_design.png'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Online Shopping Website with Shopping Cart Functionality',
    github: 'https://github.com/Nurlan97/online-shopping',
    demo: 'https://online-shopping-nu.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'An online store for construction materials with a diverse range for building and renovation needs',
    github: 'https://github.com/Nurlan97/stroy',
    demo: 'https://stroyka-store-nu.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Application',
    github: 'https://github.com',
    demo: 'https://weatherapp-kappa-nine.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Interior Design Website',
    github: 'https://github.com/Nurlan97/interior_design',
    demo: 'https://interior-design-nine.vercel.app/'
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                </div>
                
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio