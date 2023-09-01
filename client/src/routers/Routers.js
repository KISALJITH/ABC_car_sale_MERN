import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "./../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import AdminPanel from "../pages/admin/AdminPanel";
import CarForm from "../components/UI/CarForm";
import OwnerForm from "../components/UI/OwnerForm";
import CarOwners from "../pages/admin/CarOwners";
import CarEditor from "../components/UI/CarEditor";
import Messages from "../pages/admin/Messages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      {/* Tempory paths */}

      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/addcar" element={<CarForm />} />
      <Route path="/addowner" element={<OwnerForm />} />
      <Route path="/carowners" element={<CarOwners />} />
      <Route path="/editcar" element={<CarEditor />} />
      <Route path="/messages" element={<Messages />} />
      
    </Routes>
  );
};

export default Routers;
