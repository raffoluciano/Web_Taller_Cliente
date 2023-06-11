import { PackageCardAdm } from "./PackageCardAdm";
import React, { useEffect, useState } from 'react';
import { getPackage } from '../../utils/getdata';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunks";

const HomeAdm = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id, descripcion, excursiones, hoteles, activo }) => {

    const [packages, setPackages] = useState([]);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
      }

    useEffect(() => {
        getPackage().then( data => {
            setPackages(data);
        })
        .catch( error => console.log(error));
    }, [])

    return(
        <>
            <div className="container">
                <button onClick={onLogout}> Salir </button>
                <h6 className="title">Administrar paquetes</h6>
                <hr className="title"/>
                <div className='container'>        
                  <div className="row row-cols-3">    
                    {
                        packages.map( (element) => (                    
                            <div>
                                <PackageCardAdm { ...element }/>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAdm;

//Cuando se busca el id, que lo muestre en el mismo formato que el carrito

/*<div class="card  shadow-lg mb-3 bg-white rounded" >
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src={logo}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title"> Nombre del paquete</h6>
                        <h2 class="card-title">Fecha</h2>
                        <h6 class="card-title">Cantidad</h6>
                        <div class="col-md-3 offset-md-3 align-self-end">$$$$$</div>
                    </div>
                </div>
            </div>
            </div>
*/