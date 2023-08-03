import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AllCars from '../components/UI/AllCars'
import { Container, Row, Button, ButtonGroup } from 'reactstrap'
import '../styles/admin-panel.css'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return <Helmet title='Admin'>
  <CommonSection title='Admin Panel' />

  <section>
    <Container>
      <Row>
        <ButtonGroup>
        <Button className='panel-btn'><Link>All</Link></Button>
        <Button className='panel-btn'><Link>Ongoing</Link></Button>
        <Button className='panel-btn'><Link>Sold</Link></Button>
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