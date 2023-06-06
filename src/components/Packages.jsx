import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PackageCard } from '../components/PackageCard';
import { getAllPackages } from '../store/slices/package';
import { getPackage } from '../utils/getdata';


export const Packages = () => {

    //obtengo los paquetes
    const [packFilter, setPackageFilter] = useState([])
    const [filter, setFilter] = useState({category:'', value:''})
    
    const dispatch = useDispatch();
    //se almacena los paquetes en el estado global
    const { packages, isLoading } = useSelector(state => state.package);

    useEffect(() => {
       if (packages.length === 0) dispatch(getAllPackages())
    }, [])

    useEffect( () => {
        const filterPackage = () => {
            const packagesFilter = packages.filter(pack => pack[filter.category]===filter.value) 
            if (packagesFilter.length===0){
                setPackageFilter(packages)
            }
            else {
                setPackageFilter(packagesFilter)
            }
            
        };
        filterPackage();
    }, [filter, packages]);


    const resetFilter = () => {
        setFilter({category:'', value:''})
        dispatch(getAllPackages());
    } 

    if(isLoading) return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    if (packages.length === 0) return (
        <div className="alert alert-warning mt-2" role="alert">
            No se encontro ningun paquete
        </div>
    )

    const handleSelectClick = (category, value) => {
        setFilter({category:category, value:value})
    } 

  return (
    <>
    <div className='container'>
        <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                            <a className="dropdown-item" href="#">Destino</a>
                            <ul className='submenu-filtros'>
                                <li onClick={() => {handleSelectClick('destino', 'Bariloche' )}}>Bariloche</li>
                                <li onClick={() => {handleSelectClick('destino', 'California' )}}>California</li>
                            </ul>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Fecha comienzo</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Precio</a>
                        </li>
                    </ul>
                    <a className="btn btn-secondary ms-1"  role="button" onClick={resetFilter}> Reset </a>
        </div>
        </div>
        <div className='container'>        
        <div className="row row-cols-3">    
            {
                packFilter.map( (element) => (                    
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