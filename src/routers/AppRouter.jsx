import React from "react";
import { useEffect, useState } from 'react';
import { getPackage, getPackageById, getCountry, getUser } from '../utils/getdata';
import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';
import Packages from '../components/Packages';
import Package from '../components/Package';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Cart from '../components/Cart';
import Register from '../components/Register';
import { Routes, Route } from "react-router-dom";
import AddPackage from "../components/administrador/AddPackage";
import UpdatePackage from "../components/administrador/UpdatePackage";
import HomeAdm from "../components/administrador/HomeAdm";
import DeletePackage from "../components/administrador/DeletePackage";
import { useCheckAuth } from "../auth/useCheckAuth";
import { useSelector } from "react-redux";
import NavbarAdm from "../components/ui/navbarAdm";




const AppRouter = () => {

  const status = useCheckAuth();
  const { rol } = useSelector( state => state.auth );

  if ( status === 'checking' ) {
    <div className='container1'>
      <span class="loader"></span>
    </div>
  
  }

  if(status === 'authenticated' && rol === 'administrador') {
    return(
      <>
      <NavbarAdm/>
        <Routes>
          <Route path="/HomeAdm" element={<HomeAdm />}/>
          <Route path="/add" element={<AddPackage />} />
          <Route path="/update/:id" element={<UpdatePackage />} />
          <Route path="/delete/:id" element={<DeletePackage />}/>
          <Route path="*" element={<HomeAdm />} />
        </Routes>
        
      </>
    )
  }

  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/package/:id" element={<Package />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Home />} />
      </Routes> 

      <Footer/>
    </>
  )
}

export default AppRouter;