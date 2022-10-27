import '../App.css';
import logo from '../../public/logoAHORA.png';
import { } from '../utils/createdata'


const Packages = () => {


    return(
        <div className="App">
            <div className="container">
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Destino</a></li>
                    <li><a className="dropdown-item" href="#">Tipo</a></li>
                    <li><a className="dropdown-item" href="#">Precio</a></li>
                    </ul>
                </div>
                
                <div className="container">
                    <div className="row row-cols-4">
                    <div className="card-packages">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Nombre del Paquete</h6>
                        <h6 className="card-title1">Destino</h6>
                        <h6 className="card-title1">Duración</h6>
                        <h6 className="card-title-price">Precio</h6>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>

    );
}

export default Packages;