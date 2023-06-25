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
        <div className='container1'>
            <span class="loader"></span>
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
                            <a className="dropdown-item">Destino</a>
                            <ul>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Bariloche' )}}>Bariloche</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'California' )}}>California</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Capital Federal' )}}>Capital Federal</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Ushuaia' )}}>Ushuaia</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Río de Janeiro' )}}>Río de Janeiro</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Norte Argentino' )}}>Norte Argentino</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Parque de la Costa' )}}>Parque de la Costa</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'El Tigre' )}}>El Tigre</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'La boca' )}}>La boca</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Federación' )}}>Federación</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Palmar' )}}>Palmar</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Cataratas del Iguazú' )}}>Cataratas del Iguazú</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Tecnopolis' )}}>Tecnopolis</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Temaiken' )}}>Temaiken</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'China' )}}>China</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Francia' )}}>Francia</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Italia' )}}>Italia</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Grecia' )}}>Grecia</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'España' )}}>España</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Mendoza' )}}>Mendoza</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'India' )}}>India</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('destino', 'Colombia' )}}>Colombia</li>
                            </ul>
                        </li>
                    </ul>
                    <a className="btn btn-secondary ms-1"  role="button" onClick={resetFilter}> Borrar filtros </a>
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