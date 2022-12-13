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
        <div className="App">
                <div className='row'>
                    {
                        packages.map( (element) => (                    
                            <div className="col mx-auto" key={ element.id }>
                                    <PackageCard { ...element }/>
                            </div>
                        ))
                    }
                </div>        
        </div>

    );
}

export default Packages;