import '../../App.css';
import logo from '../../../public/logoAHORA.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPackageById } from '../../utils/getdata';
import date from '../../utils/date';
import deletePackage from '../../utils/deletedata';

const PackageAdm = () => {

    const {id} = useParams();
    console.log(id);

    const [info, setInfo] = useState(null);

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

    const handleDelete = async (id) => {
        try {
            const response = await deletePackage(id)
            console.log(response)
        } catch(error) {
            console.error('Error loading data to the database:', error);
          };
        console.log(`${id}`)
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
                    <p className="detalle-parrafo">Excursiones: {info.excursiones}</p>
                    <p className="detalle-parrafo">Hoteles: {info.hoteles}</p>
                    <p className="detalle">Transportes: transporte1, transporte1, transporte1, transporte1, transporte1</p>
                    <h6 className="detalle"> Cupos: {info.cupos} </h6>
                    <h6 className="detalle"><b>Precio: {info.precio}</b></h6>
                    <button type="button" class="btn btn-light" onClick={() => handleDelete(info.id) }>Eliminar</button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default PackageAdm;