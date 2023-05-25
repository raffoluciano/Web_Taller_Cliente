import '../App.css';
import logo from '../../public/logoAHORA.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getPackageById } from '../utils/getdata';
import date from '../utils/date';
import { CartContext } from '../context/CartContext';

const Package = () => {

    const {id} = useParams();

    const [info, setInfo] = useState(null);
    
    const { addToCart } = useContext(CartContext);

    const [images, setImages] = useState([]);


    useEffect( () => {
        const packageinfo = async () => {
            const inf = await getPackageById(id);
            const imagen = [inf[0].imagen1, inf[0].imagen2, inf[0].imagen3];
            setInfo(inf[0])
            setImages(imagen)
        }
        packageinfo();
     
    }, []);

    if(!info){
        return <h1>Cargando</h1>
    }

    return(
        <div className="App">
            <div className="container">
                <h6 className="title">Paquete</h6>
                <hr className="title"/>
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        {
                           images.map(image =>(
                                <img style={{margin: 2}} key={image} src={`http://localhost:4000/images/${image}`} className="img-fluid" alt="..."/>
                           ))
                        }             
                    </div>
                    <div className="col-4">
                    <p className="detalle"> {info.nombre} </p>
                    <p className="detalle">Destino: {info.destino} </p>
                    <p className="detalle">Duracion: {info.duracion} días</p>
                    <p className="detalle"> Fecha inicio: {date(info.comienzo)}  </p>
                    <p className="detalle"> Fecha fin: {date(info.fin)} </p>
                    <p className="detalle"> Lugar de salida: {info.salida} </p>
                    <p className="detalle-parrafo">Excursiones: {info.excursiones}</p>
                    <p className="detalle-parrafo">Hoteles: {info.hoteles}</p>
                    <p className="detalle-parrafo">Transporte: {info.transporte}</p>
                    <p className="detalle"><b>Precio: $ {info.precio}</b></p>
                    <button type="button" className="btn btn-success" onClick={() => { addToCart(info)}}>
                        Comprar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package;