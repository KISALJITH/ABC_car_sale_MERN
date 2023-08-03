import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
import Logo from '../../assets/all-images/logo.png'

const quickLinks = [
  {
    path:'/about',
    display:'About Us'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/contact',
    display:'Contact Us'
  }
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
            <h1><Link to='/home' className='d-flex align-items-center gap-3'>
            <Col lg='3' md='3' sm='4'>
              <img className='logo_img' src={Logo} alt="" />
            </Col>
            </Link></h1>
          </div>
          <p className="footer__logo-content office__info">
          ABC Enterprises is your Trusted Car Sales Destination. Buy or sell with ease - new models, pre-owned vehicles. Transparent pricing, financing options, and exceptional after-sales support. 
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title mb-4">Head Office</h5>
            <p className="office__info">No 218/C, Divulapitiya, Boralesgamuwa, Nugegoda</p>
            <p className="office__info">Phone : +94 77 347 3430</p>
            <p className="office__info">Email : agcnandika@gmail.com</p>
            <p className="office__info">Open Time : 10am - 7pm</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
          <div className="mb-4">
            <h5 className="footer__link-title">Newsletter</h5>
            <p className='section__description office__info'>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Email'/>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </div>
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i class="ri-copyright-line"></i>Copyright {year}, 
              Developed by SkSolutionsLanka. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer