import '../App.css';
import logo from '../../public/logoAHORA.png';

const Package = () => {
    
    return(
        <div className="App">
            <div className="container">
                <h6 className="title">Paquete</h6>
                <hr className="title"/>
                <div className="row justify-content-evenly">
                    <div className="col-4">
                    <img src={logo} className="img-fluid" alt="..."/>
                    <img src={logo} className="img-fluid" alt="..."/>
                    <img src={logo} className="img-fluid" alt="..."/>
                    
                    </div>
                    <div className="col-4">
                    <h6 className="detalle">  nombre </h6>
                    <h6 className="detalle">duracion </h6>
                    <h6 className="detalle"> comienzo </h6>
                    <h6 className="detalle"> fin </h6>
                    <h6 className="detalle"> salida </h6>
                    <p className="detalle-parrafo">Excursiones: excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1</p>
                    <p className="detalle-parrafo">Hoteles: hotel1, hotel1, hotel1, hotel1, hotel1, hotel1,hotel1</p>
                    <p className="detalle">Transportes: transporte1, transporte1, transporte1, transporte1, transporte1</p>
                    <h6 className="detalle"> cupos </h6>
                    <h6 className="detalle"><b>$ precio</b></h6>
                    <button className="btn-buy" type="button">Comprar</button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Package;