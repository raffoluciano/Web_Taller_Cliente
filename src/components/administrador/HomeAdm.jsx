import { PackageCardAdm } from "./PackageCardAdm";
import React, { useEffect, useState } from 'react';
import { getPackage } from '../../utils/getdata';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunks";
import { useNavigate } from "react-router-dom";

const HomeAdm = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id, descripcion, excursiones, hoteles, activo }) => {

    const [packages, setPackages] = useState([]);

    const dispatch = useDispatch();

    const navigation = useNavigate();

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