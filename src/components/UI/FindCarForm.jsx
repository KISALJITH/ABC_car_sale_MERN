import React from 'react'
import '../../styles/find-car-form.css'
import { Form, FormGroup} from 'reactstrap'

const FindCarForm = () => {
  return <Form className='form'>
    <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className='select__group'>
            <select>
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
        </FormGroup>

        <FormGroup className='form__group'>
            <input type="text" placeholder='Model' />
        </FormGroup>

        <FormGroup className='select__group'>
            <select>
                <option>Year</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
            </select>
        </FormGroup>

        <FormGroup className='select__group'>
            <select>
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
        </FormGroup>

        <FormGroup className='select__group'>
            <select>
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
        </FormGroup>

        <FormGroup className='form__group'>
            <button className='find__car-btn'>Find Car</button>
        </FormGroup>

    </div>
  </Form>
}

export default FindCarForm