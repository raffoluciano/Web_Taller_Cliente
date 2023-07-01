import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../store/slices/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const { status } = useSelector(state => state.auth);


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    //console.log({...formData})
    dispatch(startLoginWithEmailPassword({...formData}));
  };

  const onLogignWithGoogle = () => {
    dispatch( startGoogleSignIn()) ;
  }

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
            <button 
              className="button" 
              style={{ backgroundColor: 'red' }}
              onClick={onLogignWithGoogle}
            >
              Iniciar sesión con google
            </button>
          </form>
        </div>
        <p className="para-2">
        </p>
      </div>
    </div>
  );
};

export default Login;