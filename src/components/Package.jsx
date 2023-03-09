import '../App.css';
import logo from '../../public/logoAHORA.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getPackageById } from '../utils/getdata';
import date from '../utils/date';
import { useDispatch } from 'react-redux';
import { CartContext } from '../context/CartContext';

const Package = () => {

    const {id} = useParams();

    const [info, setInfo] = useState(null);
    const [cantidad, setCantidad] = useState(0);

    const { addToCart } = useContext(CartContext);

    const dispatch = useDispatch();

    useEffect( () => {
        const packageinfo = async () => {
            const inf = await getPackageById(id);
            setInfo(inf[0])
        }
        packageinfo();
       
    }, []);

    if(!info){
        return <h1>Cargando</h1>
    }

    const handleAddToCart = () => {
        if (cantidad <= 0 || cantidad > info.cupos) {
            alert('La cantidad seleccionada no es válida');
            return;
        }
        dispatch(addToCart({ packageId: info.id, quantity: cantidad }));
        setInfo({ ...info, cupos: info.cupos - cantidad });
        setCantidad(0);
    }

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
                    <h6 className="detalle"> {info.nombre} </h6>
                    <h6 className="detalle">Duracion: {info.duracion} </h6>
                    <h6 className="detalle"> Fecha inicio: {date(info.comienzo)}  </h6>
                    <h6 className="detalle"> Fecha fin: {date(info.fin)} </h6>
                    <h6 className="detalle"> Lugar de salida: {info.salida} </h6>
                    <p className="detalle-parrafo">Excursiones: excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1, excursion1</p>
                    <p className="detalle-parrafo">Hoteles: hotel1, hotel1, hotel1, hotel1, hotel1, hotel1,hotel1</p>
                    <p className="detalle">Transportes: transporte1, transporte1, transporte1, transporte1, transporte1</p>
                    <h6 className="detalle"> Cupos: {info.cupos} </h6>
                    <input type="number" min="1" max={info.cupos} value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} />
                    <h6 className="detalle"><b>Precio: {info.precio}</b></h6>
                    <button type="button" className="btn btn-success"  onClick={() => addToCart(info)}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package;