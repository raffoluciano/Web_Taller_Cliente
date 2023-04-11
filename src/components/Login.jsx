import { color } from '@mui/system';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';
import { startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword } from '../store/slices/auth/thunks';


const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onLogin = () => {
      if (!email && !password) return;

      dispatch( startLoginWithEmailPassword({ email, password }) );
    }

    const onLoginWithGoogle = () => {
      dispatch(startGoogleSignIn());
    }

    const onRegister = () => {
      if (!email && !password) return;

      dispatch( startCreatingUserWithEmailPassword({email, password}) );
      
    }

    return (
      <div className='App'>
        <div className='container'>
          <div className="login-box">
            <h3>Iniciar Sesión</h3>
            <form>
              <label>Email</label>
              <input type="email" value={email}/>
              <label>Contraseña</label>
              <input type="password" value={password}/>
              <button type="submit" className="button">Iniciar sesión</button>
            </form>
          </div>
          <p className="para-2">
            No tienes cuenta? <Link to={`/register`}>Registrate aquí</Link>
          </p>
        </div>
      </div>
    );
}

export default Login;