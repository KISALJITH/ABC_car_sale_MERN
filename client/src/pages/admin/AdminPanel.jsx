import React from 'react'
import CommonSection from '../../components/UI/CommonSection'
import Helmet from '../../components/Helmet/Helmet'
import AllCars from '../../components/UI/AllCars'
import { Container, Row, ButtonGroup, Col } from 'reactstrap'
import '../../styles/admin-panel.css'
import { useLocation } from 'react-router-dom'

const AdminPanel = () => {

  const location = useLocation()

  return <Helmet title='Admin'>
  <CommonSection title='Admin Panel' />

  <section>
    <Container>
      {/* <h1>Admin Panel {location.state.id}</h1> */}
      <Row className='owner_btn_row'>
        <Col>
          <button className='owner_btn'><i class="ri-roadster-fill" ></i>  Add New Car </button>
        </Col>
      </Row>
      <Row>
        <ButtonGroup className='btn_group'> 
        <button className='panel-btn'>All Cars</button>
        <button className='panel-btn'>Ongoing Cars</button>
        <button className='panel-btn'>Soldout Cars</button>
        </ButtonGroup>
      </Row>

      <Row>
       <AllCars />
      </Row>
    </Container>
  </section>
</Helmet>
}

export default AdminPanel