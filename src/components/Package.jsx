import '../App.css';
import logo from '../../public/logoAHORA.png';

const Package = () => {
    return(
        <div className="App">
            <div class="container">
                <h6 class="title">Paquete</h6>
                <hr class="title"/>
                <div class="row justify-content-evenly">
                    <div class="col-4">
                    <img src={logo} class="img-fluid" alt="..."/>
                    <img src={logo} class="img-fluid" alt="..."/>
                    <img src={logo} class="img-fluid" alt="..."/>
                    
                    </div>
                    <div class="col-4">
                    <h6 class="detalle">Nombre del paquete</h6>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <p class="detalle-parrafo">Excursiones: excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1</p>
                    <p class="detalle-parrafo">Hoteles: hotel1, hotel1, hotel1, hotel1, hotel1, hotel1,hotel1</p>
                    <p class="detalle">Transportes: transporte1, transporte1, transporte1, transporte1, transporte1</p>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <h6 class="detalle">Nombre del paquete</h6>
                    <button class="btn-buy" type="button">Comprar</button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Package;