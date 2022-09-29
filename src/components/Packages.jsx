import '../App.css';
import logo from '../../public/logoAHORA.png';
import { } from '../utils/createdata'


const Packages = () => {


    return(
        <div className="App">
            <div class="container">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                
                <div class="container">
                    <div class="row row-cols-4">
                    <div class="card-packages">
                        <img src={logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h6 class="card-title">Nombre del Paquete</h6>
                        <h6 class="card-title1">Destino</h6>
                        <h6 class="card-title1">Duración</h6>
                        <h6 class="card-title-price">Precio</h6>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>

    );
}

export default Packages;