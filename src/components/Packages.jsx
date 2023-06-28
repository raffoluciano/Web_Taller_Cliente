import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PackageCard } from '../components/PackageCard';
import { getAllPackages } from '../store/slices/package';


export const Packages = () => {

    //obtengo los paquetes
    const [packFilter, setPackageFilter] = useState([])
    const [filter, setFilter] = useState({category:'', value:''})
    
    const dispatch = useDispatch();
    const { packages, isLoading } = useSelector(state => state.package);

    useEffect(() => {
       if (packages.length === 0) dispatch(getAllPackages())
    }, [])

    useEffect( () => {
        const filterPackageDate = () => {
            let packagesFilter = []
            if (filter.category === 'comienzo')
                {
                   packagesFilter = packages.filter(pack => pack[filter.category]>=filter.value)
                }
            if (filter.category === 'duracion')
            {
                packagesFilter = packages.filter(pack => pack[filter.category]<=filter.value)
            }
            if (filter.category === 'tipo')
            {
                packagesFilter = packages.filter(pack => pack[filter.category]===filter.value)
            }

            if ((packagesFilter.length===0) && (filter.category==='')){
                setPackageFilter(packages)
            }
            else {
                setPackageFilter(packagesFilter)
            }
            
        };
        filterPackageDate();
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
                            <a className="dropdown-item">Salidas a partir de</a>
                            <ul>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('comienzo', '2023-08-01' )}}>Agosto</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('comienzo', '2023-09-01' )}}>Septiembre</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('comienzo', '2023-10-01' )}}>Octubre</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('comienzo', '2023-11-01' )}}>Noviembre</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('comienzo', '2023-12-01' )}}>Diciembre</li>
                            </ul>
                        </li>
                        <li>
                            <a className="dropdown-item">Duracion</a>
                            <ul>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('duracion', 3 )}}>Hasta 3 dias</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('duracion', 5 )}}>Hasta 5 dias</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('duracion', 7 )}}>Hasta 7 dias</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('duracion', 12 )}}>Hasta 12 dias</li>
                            </ul>
                        </li>
                        <li>
                            <a className="dropdown-item">Tipo</a>
                            <ul>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('tipo', 'Familiar' )}}>Familiares</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('tipo', 'Estudiantil' )}}>Estudiantiles</li>
                                <li className='dropdown-item' onClick={() => {handleSelectClick('tipo', 'General' )}}>Generales</li>
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