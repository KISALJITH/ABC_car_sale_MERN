import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import NotFound from './../pages/NotFound';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/cars' element={<CarListing />}/>
      <Route path='/cars/:slug' element={<CarDetails />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<NotFound />}/>

      <Route path='/adminpanel' element={<AdminPanel />}/>

    </Routes>
  )
}

export default Routers