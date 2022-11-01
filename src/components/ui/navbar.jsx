import '../../App.css';
import logo from "../../../public/logoAHORA.png";
import shopping from "../../../public/shopping-cart.png";
import user from "../../../public/user.png";
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <header className="App-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <img className="logo" src={logo}></img>
               <Link className="nav-link" to="/home">Home</Link> 
               <Link className="nav-link" to="/package">Paquetes</Link>
              <a className="nav-link" href="contacto.html">Contacto</a>
              <a className="nav-link" href="#"><img src={shopping} className="carrito"/></a>
              <a className="nav-link" href="#"><img src={user} className="usuario"/></a>
            </div>
          </div>
        </div>
      </nav>
      </header>
    );
}

export default Navbar;