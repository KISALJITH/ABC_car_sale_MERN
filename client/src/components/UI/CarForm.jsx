import React from 'react'
import {Form, FormGroup, Col, Label, Input, FormText, Button, Row, Container } from 'reactstrap'
import CommonSection from './CommonSection'
import '../../styles/carForm.css'

const CarForm = () => {
  return <>
  <CommonSection title='Add New Car'/>
  <section>
      <Container>
          <Row>
            <Form className='carForm_bg'>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleType"> Type </Label>
                    <Input id="exampleType" name="type" placeholder="Type" type="select">
                        {/* <option> Type</option> */}
                        <option value="mannual">SUV</option>
                        <option value="mannual">STATION WAGON</option>
                        <option value="mannual">SPORTS CAR</option>
                        <option value="automatic">SEDAN</option>
                        <option value="mannual">PICKUP TRUCK</option>
                        <option value="mannual">MINIVAN</option>
                        <option value="mannual">HATCHBACK</option>
                        <option value="mannual">COUPE</option>
                        <option value="mannual">CONVERTIBLE</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleBrand"> Brand </Label>
                    <Input id="exampleBrand" name="brand" placeholder="Brand" type="select">
                    {/* <option>Brand</option> */}
                    <option value="audi">Audi</option>
                    <option value="bentley">Bentley</option>
                    <option value="bmw">BMW</option>
                    <option value="cadillac">Cadillac</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="dodge">Dodge</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleModel"> Model </Label>
                    <Input id="exampleModel" name="model" placeholder="Model" type="model" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleNumberPlate"> Number Plate </Label>
                    <Input id="exampleNumberPlate" name="numberPlate" placeholder="TS-45xx" type="numberPlate"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleMileage"> Mileage </Label>
                    <Input id="exampleMileage" name="mileage" placeholder="In killometers" type="mileage"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleStatus"> Status </Label>
                    <Input id="exampleStatus" name="status" placeholder="Post status" type="select">
                        <option value="audi">Unposted</option>
                        <option value="bentley">Posted</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleValue"> Value </Label>
                    <Input id="exampleValue" name="value" placeholder="Value" type="value" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className='carFormHeading' for="exampleSellingPrize"> Selling Prize </Label>
                    <Input id="exampleSellingPrize" name="sellingPrize" placeholder="Selling Prize" type="sellingPrize" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="exampleFile" className='carFormHeading'> Images </Label>
                  <Input id="exampleFile" name="file" type="file"/>
                  <FormText>
                    Size should be less than 5Mb.
                  </FormText>
                </FormGroup>
              </Row>
              <FormGroup>
                <Label className='carFormHeading' for="exampleDescription"> Description </Label>
                <Input id="exampleDescription" name="description" placeholder="" type="textarea" rows="4"/>
              </FormGroup>
              <button className='submit__car-btn'> Submit Car Details </button>
            </Form>
          </Row>
      </Container>
  </section>
</>
}

export default CarForm