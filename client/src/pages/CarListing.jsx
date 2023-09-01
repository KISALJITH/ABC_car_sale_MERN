import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import carData from '../assets/data/carData'
import CarItem from './../components/UI/CarItem';
import '../styles/car-listing.css'

const CarListing = () => {
  return <Helmet title='Cars'>
    <CommonSection title='Cars Listing' />

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="filter-options d-flex align-items-center gap-5 mb-5">
              <span className='d-flex align-'><i class="ri-sort-asc"></i> Sort By</span>

              

              <select className='select-option'>
                <option>Brand</option>
                <option value="aston-martin">Aston Martin</option>
                <option value="audi">Audi</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">BMW</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="dodge">Dodge</option>
                <option value="ferrari">Ferrari</option>
                <option value="ford">Ford</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="jaguar">Jaguar</option>
                <option value="kia">KIA</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="maserati">Maserati</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes-benz">Mercedes-Benz</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="peugeot">Peugeot</option>
                <option value="rolls-royce">Rolls-Royce</option>
                <option value="subaru">Subaru</option>
                <option value="suzuki">Suzuki</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
              </select>

              <select className='select-option'>
                <option>Model</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>

              <select className='select-option'>
                <option>Year</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
              </select>

              <select className='select-option'>
                <option>Type</option>
                <option value="mannual">SUV</option>
                <option value="mannual">STATION WAGON</option>
                <option value="mannual">SPORTS CAR</option>
                <option value="automatic">SEDAN</option>
                <option value="mannual">PICKUP TRUCK</option>
                <option value="mannual">MINIVAN</option>
                <option value="mannual">HATCHBACK</option>
                <option value="mannual">COUPE</option>
                <option value="mannual">CONVERTIBLE</option>
              </select>

              <select className='select-option'>
                <option>Price</option>
                <option value="2">Below 2 000 000.00</option>
                <option value="3">Below 3 000 000.00</option>
                <option value="4">Below 4 000 000.00</option>
                <option value="5">Below 5 000 000.00</option>
                <option value="6">Below 6 000 000.00</option>
                <option value="7">Below 7 000 000.00</option>
                <option value="8">Below 8 000 000.00</option>
                <option value="9">Below 9 000 000.00</option>
                <option value="10">Below 10 000 000.00</option>
              </select>

            </div>
          </Col>

          {carData.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarListing