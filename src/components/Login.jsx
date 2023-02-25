import { color } from '@mui/system';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
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

    return(
        /*<div className='container'>
        <div className="signup-box">
            <h3>Sign Up</h3>
                <h6>It's free and only takes a minute</h6>
      <form>
        <label>Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
    </div>
    <p className="para-2">
      Already have an account? <a href="login.html">Login here</a>
    </p>
    </div>
    PARA CREAR LA CUENTA
    */
    <div className='App'>
    <div className='container' >
    <div className="login-box">
      <h3>Registrarse</h3>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)}/>
        <label>Contraseña</label>
        <input type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="button" value="Ingresar" style={{backgroundColor: '#C1D6FC'}} onClick={onLogin}/>
        <input type="button" value="Ingresar con google" style={{ backgroundColor: '#fa8072' }} onClick={onLoginWithGoogle}/>
        <input type="button" value="Registrarse" style={{ marginBottom: 2 }} onClick={onRegister}/>
      </form>
    </div>
    <p className="para-2">
      Not have an account? <a href="signup.html">Sign Up Here</a>
    </p>
    </div>
    </div>
        );
}

export default Login;