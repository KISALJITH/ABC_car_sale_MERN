import React from 'react'
import {Form, FormGroup, Col, Label, Input, FormText, Button, Row, Container } from 'reactstrap'
import CommonSection from './CommonSection'
import '../../styles/carForm.css'

const OwnerForm = () => {
  return <>
    <CommonSection title='Add Owner'/>
  <section>
      <Container>
          <Row>
            <Form className='carForm_bg'>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleOwner"> Owner </Label>
                    <Input id="exampleOwner" name="owner" placeholder="Name" type="name"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label className='carFormHeading' for="exampleAddress"> Owner's Address </Label>
                        <Input id="exampleAddress" name="address" placeholder="Address" type="address"/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleContact"> Contact </Label>
                    <Input id="exampleContact" name="contact" placeholder="Mobile" type="contact" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleNIC"> NIC </Label>
                    <Input id="exampleNIC" name="nic" placeholder="98xxxxxxxV" type="nic"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleDistrict"> District </Label>
                    <Input id="exampleDistrict" name="district" placeholder="District" type="select">
                        {/* <option> Type</option> */}
                        <option value="mannual">Ampara</option>
                        <option value="mannual">Anuradhapura</option>
                        <option value="mannual">Badulla</option>
                        <option value="automatic">Batticaloa</option>
                        <option value="mannual">Colombo</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <button className='submit__car-btn'> Submit Owner Details </button>
            </Form>
          </Row>
      </Container>
  </section>
  </>
}

export default OwnerForm