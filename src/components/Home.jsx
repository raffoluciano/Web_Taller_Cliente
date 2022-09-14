import '../App.css';
import logo from '../../public/logoAHORA.png';

const Home = () => {
    return(
        <div className="App">
      <div class="container">
        <h6 class="hotels">Algunos de nuestros hoteles</h6>
        <hr class="hotels"/>
        <div class="row row-cols-4">
          <div class="card">
            <img src={logo} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h6 class="card-title">Nombre del Hotel</h6>
            </div>
          </div>
          </div>
      </div>
      <div class="container1">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={logo} class="imagen-carrusel" alt="..."/>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div class="row">
      <div class="col">
        <h6 class="destinos-inicio">Destinos más visitados</h6>
        <hr class="destinos-inicio"/>
        <div class="col-6 col-md-4">
        <div class="card1" href="./ofertas.html">
          <img src={logo} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h6 class="card-title">Nombre del destino</h6>
          </div>
        </div>
        </div>
      </div>
      <div class="col">
        <h6 class="ofertas-inicio">Visitá nuestras ofertas</h6>
        <hr class="hr-ofertas-inicio"/>
        <div class="col-6 col-md-4">
        <div class="card1" href="./ofertas.html">
          <img src={logo} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h6 class="card-title">Nombre del destino </h6>
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