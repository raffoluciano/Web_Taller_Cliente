import '../App.css';
import logo from '../../public/logoAHORA.png';

const Home = () => {
    return(
        <div className="App">
      <div className="container">
        <h6 className="hotels">Algunos de nuestros hoteles</h6>
        <hr className="hotels"/>
        <div className="row row-cols-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h6 className="card-title">Nombre del Hotel</h6>
            </div>
          </div>
          </div>
      </div>
      <div className="container1">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} className="imagen-carrusel" alt="..."/>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
      <div className="col">
        <h6 className="destinos-inicio">Destinos más visitados</h6>
        <hr className="destinos-inicio"/>
        <div className="col-6 col-md-4">
        <div className="card1" href="./ofertas.html">
          <img src={logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Nombre del destino</h6>
          </div>
        </div>
        </div>
      </div>
      <div className="col">
        <h6 className="ofertas-inicio">Visitá nuestras ofertas</h6>
        <hr className="hr-ofertas-inicio"/>
        <div className="col-6 col-md-4">
        <div className="card1" href="./ofertas.html">
          <img src={logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Nombre del destino </h6>
          </div>
        </div>
      </div>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Home;