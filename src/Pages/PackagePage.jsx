import React, { useEffect, useState } from 'react'
import { PackageCard } from '../components/PackageCard';
//import Package from '../components/Package'
import { getPackage } from '../utils/getdata';

export const PackagePage = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        getPackage().then( data => {
            setPackages(data);
        })
        .catch( error => console.log(error));
    }, [])
    


  return (
    <>
        <div className="row">
            {
                packages.map( (element) => (                    
                        <div className="col mx-auto" key={ element.id }>
                                <PackageCard { ...element }/>
                        </div>
                    ))
             }
             </div>   

    </>
  )
}
