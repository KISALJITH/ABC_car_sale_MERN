import React from 'react'
import CommonSection from '../../components/UI/CommonSection'
import Helmet from '../../components/Helmet/Helmet'
import { Container, Row, ButtonGroup, Col } from 'reactstrap'
import '../../styles/admin-panel.css'
import AllCars from '../../components/UI/AllOwners'

const CarOwners = () => {
    return <Helmet title='Admin'>
    <CommonSection title='Car Owners' />
  
    <section>
      <Container>
        <Row>
          <Col>
            <button className='owner_btn'><i class="ri-file-user-line"></i> Add New Owner</button>
          </Col>
        </Row>
  
        <Row>
         <AllCars />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarOwners