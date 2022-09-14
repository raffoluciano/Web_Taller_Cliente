import '../../App.css';

const Footer = () => {
    return (
        <footer>
        <hr/>
          <div class="row-1">
            <div class="col l6 s12">
              <h5 class="white-text">EXPLORE</h5>
              <li class="grey-text text-lighten-3" href="./home.html">Inicio</li>
              <li class="grey-text text-lighten-3" href="./paquetes.html">Paquetes</li>
              <li class="grey-text text-lighten-3" href="./ofertas.html">Ofertas</li>
              <li class="grey-text text-lighten-3" href="./contacto.html">Contacto</li>
            </div>
          </div>
        <div class="footer-copyright">
          <div class="container">
          © 2022 Taller de integración
          </div>
        </div>
        </footer>
    );
}

export default Footer;