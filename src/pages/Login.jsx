import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="login_background">

      {/* <div className=" mt-5 mb-5"> */}
        <div className='login_form'>
          {/* <Row>
            <Col > */}
            <div >
                <Form>
                    <div  className="form_item ">

                        <FormGroup className='form__group group1 d-flex'>
                            <span className='login_icon'><i class="ri-user-line"></i></span>
                            <input className='input_group' type="text" placeholder='Username' />
                        </FormGroup>

                        <FormGroup className='form__group group1 d-flex'>
                            <span className='login_icon'><i class="ri-lock-line"></i></span>
                            <input className='input_group' type="password" placeholder='Password' />
                        </FormGroup>

                        <FormGroup className='form__group group1'>
                            <button className='login-btn '>Login</button>
                        </FormGroup>

                    </div>
                </Form>
            </div>
            {/* </Col>
          </Row> */}
        </div>
      {/* </div> */}
    </section>
  )
}

export default Login