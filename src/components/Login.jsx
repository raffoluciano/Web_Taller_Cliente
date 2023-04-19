import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user/login', formData);
      console.log(response.data);
      const role = response.data.rol;
      if (role === 'cliente') {
        window.location.href = '/home';
      } else if (role === 'administrador') {
        window.location.href = '/homeadm';
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.mensaje);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className="login-box">
          <h3>Iniciar Sesión</h3>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
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