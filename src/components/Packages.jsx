import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PackageCard } from '../components/PackageCard';
import { getAllPackages } from '../store/slices/package';
import { getPackage } from '../utils/getdata';


export const Packages = () => {

    // const [packages, setPackages] = useState([]);

    const dispatch = useDispatch();
    const { packages, isLoading } = useSelector(state => state.package);

    useEffect(() => {
        // getPackage().then( data => {
        //     setPackages(data);
        // })
        // .catch( error => console.log(error));

       if (packages.length === 0) dispatch(getAllPackages())
    }, [])

    const resetFilter = () => {
        dispatch(getAllPackages());
    } 

    if(isLoading) return (
        <div className="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )

    if (packages.length === 0) return (
        <div className="alert alert-warning mt-2" role="alert">
            No se encontro ningun paquete
        </div>
    )

  return (
    <>
    <div className='container'>
        <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Destino</a></li>
                    <li><a className="dropdown-item" href="#">Fecha comienzo</a></li>
                    <li><a className="dropdown-item" href="#">Precio</a></li>
                    </ul>
                    <a className="btn btn-secondary ms-1"  role="button" onClick={resetFilter}> Reset </a>
        </div>
        </div>
        <div className='container'>        
        <div className="row row-cols-3">    
            {
                packages.map( (element) => (                    
                        <div>
                                <PackageCard key={element.id} { ...element }/>
                        </div>
                    ))
             }
        </div>
    </div>
    </>
  )
}
export default Packages;