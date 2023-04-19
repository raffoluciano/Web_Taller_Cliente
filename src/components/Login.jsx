// Importa las librerías necesarias
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Función para manejar el cambio en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamada a la API para iniciar sesión
      const response = await axios.post('http://localhost:4000/user/login', formData);
      // Manejar la respuesta del backend (por ejemplo, mostrar alertas)
      console.log(response.data);
      // Redireccionar a la página correspondiente según el rol del usuario
      const role = response.data.rol;
      if (role === 'cliente') {
        // Redireccionar a la página de inicio de sesión del cliente
        window.location.href = '/home';
      } else if (role === 'administrador') {
        // Redireccionar a la página de inicio de sesión del administrador
        window.location.href = '/homeadm';
      }
    } catch (error) {
      console.log(error);
      // Manejar el error de inicio de sesión (por ejemplo, mostrar alertas)
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className="login-box">
          <h3>Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <label>Contraseña</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit" className="button">Iniciar Sesión</button>
          </form>
        </div>
        <p className="para-2">
          No tienes cuenta? <Link to={`/register`}>Registrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;