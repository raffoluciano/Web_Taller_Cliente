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

    const [images, setImages] = useState(['alaska1.jpg','alaska2.jpg','alaska3.jpg'])

    console.log(images)

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
                    <h6 className="detalle"> {info.nombre} </h6>
                    <h6 className="detalle">Destino: {info.destino} </h6>
                    <h6 className="detalle">Duracion: {info.duracion} </h6>
                    <h6 className="detalle"> Fecha inicio: {date(info.comienzo)}  </h6>
                    <h6 className="detalle"> Fecha fin: {date(info.fin)} </h6>
                    <h6 className="detalle"> Lugar de salida: {info.salida} </h6>
                    <p className="detalle-parrafo">Excursiones: {info.excursiones}</p>
                    <p className="detalle-parrafo">Hoteles: {info.hoteles}</p>
                    <p className="detalle-parrafo">Transporte: {info.transporte}</p>
                    <h6 className="detalle"><b>Precio: {info.precio}</b></h6>
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