import React, { useState } from 'react';
import { createUser } from '../utils/createdata';
import { startCreatingUserWithEmailPassword } from '../store/slices/auth/thunks';
import { useDispatch } from 'react-redux';


const Register = ({ nombre, email, contraseña, dni })  => {
  const dispatch = useDispatch();
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
    dispatch(startCreatingUserWithEmailPassword({email: formData.email, password:formData.contraseña }));
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