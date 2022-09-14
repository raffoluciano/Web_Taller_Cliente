import '../../App.css';
import logo from "../../../public/logoAHORA.png";
import shopping from "../../../public/shopping-cart.png";
import user from "../../../public/user.png";

const Navbar = () =>{
    return (
        <header className="App-header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <img class="logo" src={logo}></img>
              <a class="nav-link" href="#">Inicio</a>
              <a class="nav-link" href="paquetes.html">Paquetes</a>
              <a class="nav-link" href="ofertas.html">Ofertas</a>
              <a class="nav-link" href="contacto.html">Contacto</a>
              <a class="nav-link" href="#"><img src={shopping} class="carrito"/></a>
              <a class="nav-link" href="#"><img src={user} class="usuario"/></a>
            </div>
          </div>
        </div>
      </nav>
      </header>
    );
}

export default Navbar;