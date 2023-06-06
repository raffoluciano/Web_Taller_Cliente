import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PackageCard } from '../components/PackageCard';
import { getAllPackages } from '../store/slices/package';
import { getPackage } from '../utils/getdata';

const MY_SELECT_DATA = [
  {
    groupName: "destino",
    items: [
      {
        name: "bariloche",
        value: "bariloche",
      },
      {
        name: "tilcara",
        value: "tilcara",
      },
    ],
  },
  {
    groupName: "fecha",
    items: [
      {
        name: "Menos 60 días",
        value: 60,
      },
      {
        name: "Menos 45 días",
        value: 45,
      },
      {
        name: "Menos 30 días",
        value: 30,
      },
    ],
  },
  {
    groupName: "precio",
    items: [
      {
        name: "Hasta 50 mil",
        value: 50000,
      },
      {
        name: "Hasta 70 mil",
        value: 70000,
      },
    ],
  },
];


export const Packages = () => {

    //obtengo los paquetes
    const [packFilter, setPackageFilter] = useState([])
    const [filter, setFilter] = useState({category: '', value: null})

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
        setFilter({category: '', value: null})
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
        setFilter({category, value})
    } 

    

  return (
    <>
      <div className="container">
        <Filter handleSelect={handleSelectClick} groupsData={MY_SELECT_DATA} />
        <a className="btn btn-secondary ms-1" role="button" onClick={resetFilter}>
          {" "}Reset{" "}
        </a>
      </div>
      <div className="container">
        <div className="row row-cols-3">
          {
            // packFilter.map( (element) => (
            //         <div>
            //                 <PackageCard key={element.id} { ...element }/>
            //         </div>
            //     ))
          }
        </div>
      </div>
    </>
  );
}
export default Packages;

function Filter ({groupsData, handleSelect}) {
  return (
    <div className="dropdown">
      <a
        className="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {groupsData.map((group) => (
          <li key={group.groupName}>
              <p className="dropdown-item" href="#">{group.groupName}</p>
              <ul className='submenu-filtros'>
                  {group.items.map(item => 
                    <li
                      key={item.value}
                      onClick={() => handleSelect(group.groupName, item.value)}
                    >
                      {item.name}
                    </li>
                  )}
              </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}