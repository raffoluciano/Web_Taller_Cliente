import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PackageCard } from '../components/PackageCard';
import { getAllPackages } from '../store/slices/package';

//   destino: {
//     items: [
//       {name: "bariloche", value: "bariloche"},
//       {name: "caribe", value: "caribe"},
//     ],
//   },
//   fecha: {
//     items: [
//       {
//         name: "Menos 60 días",
//         value: 60,
//       },
//       {
//         name: "Menos 45 días",
//         value: 45,
//       },
//       {
//         name: "Menos 30 días",
//         value: 30,
//       },
//     ],
//   },
//   precio: {
//     items: [
//       {
//         name: "Hasta 50 mil",
//         value: 50000,
//       },
//       {
//         name: "Hasta 70 mil",
//         value: 70000,
//       },
//     ],
//   },
// };

function formarTexto (listOfWords, value) {  
  if (!listOfWords || listOfWords.length === 0) return value
  
  const listCopy = [...listOfWords]
  listCopy.splice(1, 0, value)
  return listCopy.join(" ")
}

// TODO: falta terminar de armar bien la estructura para que quede como la de ashiba
const armarEstrctura = (arrayPaquetes) => {

    let destinos = new Set()
    let precios = new Set()
    let comienzos = new Set()

    arrayPaquetes.forEach(paquete => {
        const { destino, precio, comienzo } = paquete

        if (!destinos.has(destino)) destinos.add(destino)
        if (!precios.has(precio)) precios.add(precio)
        if (!comienzos.has(comienzo)) comienzos.add(comienzo)
    })

    const categorias = {
      // Descomentar los items harcodeados y comentar los de abajo. Así se prueba
      // si amra bien la estructura con los paquetes que están en el estado global
      // y llegan por el parámetros "arrayPaquetes"
      destino: {
        // items: [...destinos],
        items: ["Bariloche", "Tilcara"]
      },
      fecha: {
        listOfWords: ["Menos de", "días"],
        // items: [...comienzos],
        items: ["12-dic"]
      },
      precio: {
        listOfWords: ["Hasta"],
        // items: [...precios],
        items: [80000, 20000]
      }
    }

    return categorias || {}
}

export const Packages = () => {

    //obtengo los paquetes
    const [packFilter, setPackageFilter] = useState([])
    const [filter, setFilter] = useState({category: '', value: null})

    const dispatch = useDispatch();
    //se almacena los paquetes en el estado global
    const { packages, isLoading } = useSelector(state => state.package);

    const myEstructuraFacherita = armarEstrctura(packages)

    useEffect(() => {
       if (packages.length === 0) dispatch(getAllPackages())
    }, [])

    useEffect( () => {
        const filterPackage = () => {
            // TODO: Falta agregar condicionales para que el tipo de filtro (usando <, >, ===, tolowerCase) dependa de la categoría
            const packagesFilter = packages.filter(pack => pack[filter.category]?.toLowerCase() === filter?.value?.toLowerCase()) 

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
        <Filter handleSelect={handleSelectClick} groupsData={myEstructuraFacherita} />
        <a className="btn btn-secondary ms-1" role="button" onClick={resetFilter}>
          {" "}Reset{" "}
        </a>
      </div>
      <div className="container">
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
        {
          Object.entries(groupsData)
            .map(([groupName, groupData]) => (
              <li key={groupName}>
                <p className="dropdown-item">{groupName}</p>
                <ul className='submenu-filtros'>
                    {groupData?.items.map(item => 
                      <li
                        key={item}
                        onClick={() => handleSelect(groupName, item)}
                      >
                        {formarTexto(groupData.listOfWords, item)}
                      </li>
                    )}
                </ul>
              </li>
            ))
          } 
      </ul>
    </div>
  )
}
