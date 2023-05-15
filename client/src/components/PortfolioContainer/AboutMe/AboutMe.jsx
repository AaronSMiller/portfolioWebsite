import React, { useEffect } from 'react';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading.jsx';
import ScrollService from '../../../utilities/ScrollService.jsx'
// import Animations from '../../utilities/Animations'
import './AboutMe.css'


function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREENS_CONSTANTS = {
    description: "As a full-stack software engineer and Arizona State University graduate, I've always been passionate about optimizing processes and understanding technology's impact on businesses. I began my career in supply chain management and soon realized the need for innovation in the industry. Driven by this realization, I decided to transition to software engineering to develop adaptable solutions for ever-changing business needs. Now, as a full-stack software engineer, I am seeking new opportunities to apply my expertise and passion, making a meaningful impact on businesses and their customers.",
    highlights: {
      bullets: [
        'Full-stack development expert in web technologies.',
        'Proven leadership in software project management.',
        'System optimization and database efficiency ace.',
        'Engaging user interface and UX design specialist.',
        'Agile methodologies and Scrum framework authority.',
        'Versatile professional with industry adaptability.',
      ],
      heading: "Here Are A Few Highlights:"
    }
  }

  const renderHighlight = () => {
    return (
      SCREENS_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className='highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }

  return (
    <div className='about-me-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREENS_CONSTANTS.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREENS_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn highlighted-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Hire Me {" "}
              </button>
              <a href='AaronMillerResumeWebsite.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AboutMe;