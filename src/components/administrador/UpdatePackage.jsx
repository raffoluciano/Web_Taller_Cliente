import '../../App.css';
import logo from '../../../public/logoAHORA.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPackageById } from '../../utils/getdata';
import date from '../../utils/date';
import updatePackage from '../../utils/updatedate';
import React from 'react';

/*const UpdatePackage = ({data}) => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    const packageinfo = async () => {
      const inf = await getPackageById(id);
      setInfo(inf[0]);
      setFormData(inf[0]);
    };
    packageinfo();
  }, [id]);

  if (!formData) {
    return <h1>Cargando</h1>;
  }

  const handleUpdate = () => {
    updatePackage(info.id)
      .then(response => response.json())
      .then(data => {
        console.log('Data has been updated in the database:', data);
        alert(`El paquete ${info.id} ha sido eliminado con éxito`);
      })
      .catch(error => {
        console.error('Error updating data in the database:', error);
      });
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
    return(
        <div className="App">
            <div className="container">
                <h6 className="title">Paquete</h6>
                <hr className="title"/>
                <div className="row justify-content-evenly">
                    <div className="col-4">
                    <img src={logo} className="img-fluid" alt="..."/>
                    <img src={logo} className="img-fluid" alt="..."/>
                    <img src={logo} className="img-fluid" alt="..."/>
                    
                    </div>
                    <div className="col-4">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input class="form-control" type='text' value={formData.nombre} name="nombre" onChange={handleChange}/>
                    <label for="inputTime" class="form-label">Duracion</label>
                    <input class="form-control" type='text' value={formData.duracion} name="duracion" onChange={handleChange}/>
                    <label for="inputInit" class="form-label">Comienzo</label>
                    <input class="form-control" type='text' value={date(formData.comienzo)} name="comienzo" onChange={handleChange}/>
                    <label for="inputEnd" class="form-label">Fin</label>
                    <input class="form-control" type='text' value={date(formData.fin)} name="fin" onChange={handleChange}/>
                    <label for="inputExit" class="form-label">Salida</label>
                    <input class="form-control" type='text' value={formData.salida} name="salida" onChange={handleChange}/>
                    <label for="inputDescrip" class="form-label">Descripción</label>
                    <textarea className="form-control" type='text' value={formData.descripcion} name="descripcion" onChange={handleChange}></textarea>
                    <label for="inputCupos" class="form-label">Cupos</label>
                    <input class="form-control" type='text' value={formData.cupos} name="cupos" onChange={handleChange}/>
                    <label for="inputExcursions" class="form-label">Excursiones</label>
                    <textarea className="form-control" type='text' value={formData.excursiones} name="excursiones" onChange={handleChange}></textarea>
                    <label for="inputHotels" class="form-label">Hoteles</label>
                    <textarea className="form-control" type='text' value={formData.hoteles} name="hoteles" onChange={handleChange}></textarea>
                    <label for="inputPrice" class="form-label">Precio</label>
                    <input class="form-control" type='text' value={formData.precio} name="precio" onChange={handleChange}/>
                   <button type="button" class="btn btn-light" onClick={() => handleUpdate(formData.id) }>Actualizar</button>
                    */
                  
                  const UpdatePackage = ({ data }) => {
                    const { id } = useParams();
                    const [info, setInfo] = useState(null);
                    const [formData, setFormData] = useState(data);
                  
                    useEffect(() => {
                      const packageinfo = async () => {
                        const inf = await getPackageById(id);
                        setInfo(inf[0]);
                        setFormData(inf[0]);
                      };
                      packageinfo();
                    }, [id]);
                  
                    if (!formData) {
                      return <h1>Cargando</h1>;
                    }
                  
                    const handleUpdate = () => {
                      updatePackage(info.id)
                        .then(response => response.json())
                        .then(data => {
                          console.log('Data has been updated in the database:', data);
                          alert(`El paquete ${info.id} ha sido actulizado	 con éxito`);
                        })
                        .catch(error => {
                          console.error('Error updating data in the database:', error);
                        });
                    };
                  
                    const handleChange = event => {
                      setFormData({ ...formData, [event.target.name]: event.target.value });
                    };
                    
                      return(
                          <div className="App">
                              <div className="container">
                                  <h6 className="title">Paquete</h6>
                                  <hr className="title"/>
                                  <div className="row justify-content-evenly">
                                      <div className="col-4">
                                      <img src={logo} className="img-fluid" alt="..."/>
                                      <img src={logo} className="img-fluid" alt="..."/>
                                      <img src={logo} className="img-fluid" alt="..." />
                            </div>
                            <div className="col-4">
                              <label htmlFor="inputName" className="form-label">
                                Nombre
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.nombre}
                                name="nombre"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputTime" className="form-label">
                                Duracion
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.duracion}
                                name="duracion"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputInit" className="form-label">
                                Comienzo
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={date(formData.comienzo)}
                                name="comienzo"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputEnd" className="form-label">
                                Fin
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={date(formData.fin)}
                                name="fin"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputExit" className="form-label">
                                Salida
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.salida}
                                name="salida"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputDescrip" className="form-label">
                                Descripción
                              </label>
                              <textarea
                                className="form-control"
                                type="text"
                                value={formData.descripcion}
                                name="descripcion"
                                onChange={handleChange}
                              ></textarea>
                              <label htmlFor="inputCupos" className="form-label">
                                Cupos
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.cupos}
                                name="cupos"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputExcursions" className="form-label">
                                Excursiones
                             </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.excursiones}
                                name="excursiones"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputExcursions" className="form-label">
                                Hoteles
                             </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.hoteles}
                                name="hoteles"
                                onChange={handleChange}
                              />
                              <label htmlFor="inputExcursions" className="form-label">
                                Precio
                             </label>
                              <input
                                className="form-control"
                                type="text"
                                value={formData.precio}
                                name="precio"
                                onChange={handleChange}
                              />
                    <button onClick={handleUpdate} className="btn btn-primary">
                        Actualizar
                    </button>
                   </div>
                </div>
                </div>
            </div>
    );
}
  export default UpdatePackage;


/*
const UpdatePackage = () => {

    const {value={info.} id} = useParams();
    console.log(value={info.} id);

    const [setInfo, setStateInfo] = useState()

    const handleUpdate = async () => {
        try {
          updatePackage
        setInfo(stateInfo);
          alert("Package updated successfully");
        } catch (error) {
          console.error(error);
          alert("Error updating package");
        }
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setStateInfo(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      
    
      return(
          <div className="App">
              <div className="container">
                  <h6 className="title">Paquete</h6>
                  <hr className="title"/>
                  <div className="row justify-content-evenly">
                      <div className="col-4">
                      <img src={logo} className="img-fluid" alt="..."/>
                      <img src={logo} className="img-fluid" alt="..."/>
                      <img src={logo} className="img-fluid" alt="..."/>
                      
                      </div>
                      <div className="col-4">
                      <p className="detalle"><b>{info.nombre}</b></p>
                      <p className="detalle">Duración: {info.duracion} días</p>
                      <p className="detalle">Fecha de inicio: {date(info.comienzo)} </p>
                      <p className="detalle">Fecha de finalización: {date(info.fin)} </p>
                      <p className="detalle">Lugar de salida: {info.salida} </p>
                      <p className="detalle">Descripción: {info.descripcion} </p>
                      <p className="detalle">Cupos: {info.cupos} </p>
                      <p className="detalle">Excursiones: {info.excursiones} </p>
                      <p className="detalle">Hoteles: {info.hoteles} </p>
                      <p className="detalle"><b>$ {info.precio}</b></p>
                     <button type="button" class="btn btn-light" onClick={() => handleDelete(info.value={info.} id) }>Eliminar</button>
                      </div>
                  </div>
                  </div>
              </div>
      );
  }
  
  export default UpdatePackage;
  */

  /*  const [formData, setFormData] = useState(data);

  const handleUpdate = () => {
    axios.put(`http://localhost:4000/package/package/${formData.value={info.} id}`, formData)
      .then(response => {
        console.log('Data has been updated in the database:', response.data);
      })
      .catch(error => {
        console.error('Error updating data in the database:', error);
      });
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input name="nombre" value={info.}{formData.nombre} onChange={handleChange} />
      <input name="precio" value={info.}{formData.precio} onChange={handleChange} />
      <button onClick={handleUpdate}>Update data in the database</button>
    </form>
  );
}
*/