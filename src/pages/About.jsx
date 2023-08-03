import React from 'react'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet';
import AboutSection from './../components/UI/AboutSection';
import { Container, Row, Col } from 'reactstrap';
import BecomeDriverSection from './../components/UI/BecomeDriverSection';

import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers';
import "../styles/about.css"

const About = () => {
  return (
    <Helmet title='About'>
      <CommonSection title='About Us' />
      <AboutSection aboutClass="aboutPage"/>

      <section className='about__page-section'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className="about__page-img">
                <img src={driveImg} alt="" className='w-100 rounded-3'/>
              </div>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Provided Your Dream Car
                </h2>

                <p className="section__description">
                  At our dealership, we are driven by a steadfast commitment to fulfilling your automotive aspirations. We take immense pride in our ability to provide you with your dream car, tailored precisely to your preferences and desires. Our dedicated team of professionals works tirelessly to curate an exceptional selection of vehicles, encompassing a wide array of makes and models to cater to every taste. Whether you seek luxury, performance, or practicality, we endeavor to match you with the perfect automobile that aligns seamlessly with your vision. 
                </p>

                <p className="section__description">
                With an unwavering focus on customer satisfaction, we go above and beyond to ensure that your car-buying experience is nothing short of extraordinary. Trust in us to transform your dreams into a tangible reality, as we stand firmly committed to delivering the ultimate driving companion that perfectly complements your lifestyle and aspirations.
                </p>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About
