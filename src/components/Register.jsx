import React, { useState } from 'react';
import { createUser } from '../utils/createdata';

const Register = ({ nombre, email, contraseña, dni })  => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    dni: ''
  });

  const handleInputChange = event => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
};

const handleSubmit = event => {
  event.preventDefault();
  const myFormatedData = {
      "nombre": formData.nombre,
      "email": formData.email,
      "contraseña": formData.contraseña,
      "dni": formData.dni
   }
    createUser(myFormatedData)
      .then(formData => {
        console.log('Data has been loaded to the database:', formData);
        alert(`El usuario ${formData.nombre} ha sido creado con éxito`);
      })
      .catch(error => {
        console.error('Error loading data to the database:', error);
      });
  }
  return (
    <div className='App'>
    <div className='container' >
    <div className="login-box">
      <h3>Registrarse</h3>
      <form>
      <div>
        <label>Nombre y Apellido</label>
        <input type="text" value={ formData.nombre} onChange={handleInputChange} name="nombre"/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={ formData.email} onChange={handleInputChange} name="email"/>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" value={ formData.contraseña} onChange={handleInputChange} name="contraseña"/>
      </div>
      <div>
        <label>DNI</label>
        <input type="text" value={ formData.dni} onChange={handleInputChange} name="dni"/>
      </div>
      <button type="submit" class="button" onClick={ handleSubmit }>Registrarse</button>
      </form>
         </div>
         </div>
         </div>
  );
}

export default Register;