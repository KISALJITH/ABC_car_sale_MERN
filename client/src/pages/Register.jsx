import React, { useState } from 'react'
import axios from "axios"
import { Form, FormGroup } from 'reactstrap'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

const navigate = useNavigate();

  const [email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  
  async function submit(e){
    e.preventDefault();

    try {
      
      await axios.post("http://localhost:3000/register",{
        email,password
      })
      .then(res=>{
        console.log(res.data)
        if(res.data=="exist"){
            alert("User already exists")
        }
        else if(res.data=="notexist"){
            navigate("/adminpanel",{state:{id:email}})
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e)
      })

    } catch (error) {
      console.log(error)
    }
  }

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
                            <input className='input_group' type="email" placeholder='Username' onChange={(e)=>{setEmail(e.target.value)}} />
                        </FormGroup>

                        <FormGroup className='form__group group1 d-flex'>
                            <span className='login_icon'><i class="ri-lock-line"></i></span>
                            <input className='input_group' type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}  />
                        </FormGroup>

                        <FormGroup className='form__group group1'>
                            <input className='login-btn' value="Register" type="submit" onClick={submit}/>
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

export default Register