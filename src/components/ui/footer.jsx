import '../../App.css';

const Footer = () => {
    return (
        <footer>
        <hr/>
          <div className="row-1">
            <div className="col l6 s12">
              <h5 className="white-text">EXPLORE</h5>
              <li className="grey-text text-lighten-3" href="./home.html">Inicio</li>
              <li className="grey-text text-lighten-3" href="./paquetes.html">Paquetes</li>
              <li className="grey-text text-lighten-3" href="./ofertas.html">Ofertas</li>
              <li className="grey-text text-lighten-3" href="./contacto.html">Contacto</li>
            </div>
          </div>
        <div className="footer-copyright">
          <div className="container">
          © 2022 Taller de integración
          </div>
        </div>
        </footer>
    );
}

export default Footer;