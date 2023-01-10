import React from "react";
import { useEffect, useState } from 'react';
import { getPackage, getPackageById, getCountry, getUser } from '../utils/getdata';
import { useParams } from 'react-router-dom';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';
import Packages from '../components/Packages';
import Package from '../components/Package';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Cart from '../components/Cart';
import { Routes, Route } from "react-router-dom";


const AppRouter = () => {

    return (
      <div className="AppRouter">
            <Navbar/>

            <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/packages" element={<Packages />}/>
              <Route path="/package/:id" element={<Package />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<Home />} />
            </Routes> 

            <Footer/>
        </div>
    );
}

export default AppRouter;


//EJ PARA PROBAR TRAE LOS DATOS DE LAS FUNCIONES SIN PASAR PARAMETROS
/*
const [users, setUsers] = useState([]);
  useEffect(() => {
    [nombre de la funcion]().then(us => setUsers(us));
  },[])

  Lo de abajo queda igual
*/

//EJ PARA PROBAR SI TRAE LOS DATOS DE LAS FUNCIONES QUE RECIBEN UN PARAMETRO ID

/*
  const id = 1
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      setUsers (await getPackageById(id));
    }
    consultarApi();
  },[])


  <ul>
          {
            users.map(user => (
              <li key={user.id}>{user.descripcion}</li>) //cambiar el campo dni a id, y el otro que se quiera mostrar p/prueba
            )
          }
  </ul>
*/