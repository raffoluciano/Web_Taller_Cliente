import '../../App.css';
import logo from '../../../public/logoAHORA.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPackageById } from '../../utils/getdata';
import date from '../../utils/date';
import { deletePackage } from '../../utils/deletedata';
import { Link } from 'react-router-dom';

const DeletePackage = () => {

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
          alert(`El paquete ${info.id} ha sido eliminado con éxito`)
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
                    <p className="detalle"><b>{info.nombre}</b></p>
                    <p className="detalle">Duración: {info.duracion} días</p>
                    <p className="detalle">Fecha de inicio: {date(info.comienzo)} </p>
                    <p className="detalle">Fecha de finalización: {date(info.fin)} </p>
                    <p className="detalle">Lugar de salida: {info.salida} </p>
                    <p className="detalle">Descripción: {info.descripcion} </p>
                    <p className="detalle">Cupos: {info.cupos} </p>
                    <p className="detalle">Excursiones: {info.excursiones} </p>
                    <p className="detalle">Hoteles: {info.hoteles} </p>
                    <p className="detalle"><b>$ {info.precio}</b></p>
                   <Link to={'/HomeAdm'}> <button type="button" class="btn btn-light" onClick={() => handleDelete(info.id) }>Eliminar</button>
                   </Link>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default DeletePackage;