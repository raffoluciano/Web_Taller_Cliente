import React from 'react';
import { useState, useEffect } from 'react';
import { getPackage } from '../utils/getdata';
import { PackageCard } from '../components/PackageCard';


const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        getPackage().then( data => {
            setPackages(data);
        })
        .catch( error => console.log(error));
    }, [])
    
    return(
        <>
    <div className='container'>
        <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Destino</a></li>
                    <li><a className="dropdown-item" href="#">Tipo</a></li>
                    <li><a className="dropdown-item" href="#">Precio</a></li>
                    </ul>
                </div>
                </div>
        <div className='container'>        
        <div className="row row-cols-3">    
            {
                packages.map( (element) => (                    
                        <div>
                                <PackageCard { ...element }/>
                        </div>
                    ))
             }
        </div>
    </div>
    </>
    );
}

export default Packages;