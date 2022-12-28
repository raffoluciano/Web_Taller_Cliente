import '../App.css';

const Login = () => {
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
    <div className='container'>
    <div className="login-box">
      <h3>Registrarse</h3>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Contraseña</label>
        <input type="password" placeholder="" />
        <input type="button" value="Registrarse" />
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