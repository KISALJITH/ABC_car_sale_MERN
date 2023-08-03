import {React, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/header.css'
import Logo from '../../assets/all-images/logo.png'

import { Container, Row, Col } from 'reactstrap'

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/cars',
    display:'Cars'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]

const Header = () => {

  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')

  return <header className='header'>
   {/* header top */}
   <div className="header__top">
    <Container>
      <Row>
        <Col lg='6' md='6' sm='6'>
          {/* <div className="header__top__left">
            <span>Need Help?</span>
            <span className="header__top__help">
            <i class="ri-phone-fill"></i> +1-202-555-0149
            </span>
          </div> */}
        </Col>
        <Col lg='6' md='6' sm='6'>
          <div className="header__top__right d-flex 
          align-items-center justify-content-end gap-3">
            <Link to='/login' className='d-flex align-items-center gap-1'>
              <i class="ri-login-circle-line"></i> Login
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
   </div>

   {/* header middle */}
   <div className="header__middle">
    <Container>
      <Row className='navbar_content'>
        <Col lg='3' md='3' sm='4'>
          <img className='logo_img' src={Logo} alt="" />
        </Col>
        <Col lg='3' md='3' sm='4'>
          <div className="header_location d-flex align-items-center
          gap-2">
            <span><i class="ri-earth-line"></i></span>
            <div className="header__location-content">
              <h4>Sri Lanka</h4>
              <h6>No 218/C, Divulapitiya,<br/> Boralesgamuwa, Nugegoda</h6>
            </div>
          </div>
        </Col>

        <Col lg='3' md='3' sm='4'>
          <div className="header_location d-flex align-items-center
          gap-2">
            <span><i class="ri-time-line"></i></span>
            <div className="header__location-content">
              <h4>Monday to Saturday</h4>
              <h6>10am - 7pm</h6>
            </div>
          </div>
        </Col>

        <Col lg='2' md='3' sm='0' 
          className='d-flex align-items-center justify-content-end'>
          <button className="header__btn btn">
            <Link to=''>
            <i class="ri-phone-line"></i> Request a call
            </Link>
          </button>
        </Col>
      </Row>
    </Container>
   </div>

    {/* main navigation */}
    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper d-flex align-items-center
        justify-content-between">
          <span className="mobile__menu">
          <i class="ri-menu-line" onClick={toggleMenu}></i>  
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {navLinks.map((item,index) => (
                <NavLink to={item.path} key={index} className={(navClass) => navClass.isActive ? "nav__active nav__item" :
                "nav__item"}>{item.display}</NavLink>
              ))}
            </div>
          </div>

          <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder='Search'/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </div>

        </div>
      </Container>
    </div>

  </header>
}

export default Header