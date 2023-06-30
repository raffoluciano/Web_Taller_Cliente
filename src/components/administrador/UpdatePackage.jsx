import '../../App.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPackageById } from '../../utils/getdata';
import date from '../../utils/date';
import updatePackage from '../../utils/updatedate';
import React from 'react';
                  
const UpdatePackage = ({ data }) => {

  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [formData, setFormData] = useState(data);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const packageinfo = async () => {
      const inf = await getPackageById(id);
      const imagen = [inf[0].imagen1, inf[0].imagen2, inf[0].imagen3];
      setInfo(inf[0]);
      setFormData(inf[0]);
      setImages(imagen)
    };
    packageinfo();
  }, [id]);
                  
  if (!formData) {
    return (
    <div className='container1'>
      <span class="loader"></span>
    </div>
    )
  }                
                   
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    updatePackage(info.id, formData)
      .then(response => {
        console.log('Data has been updated in the database:', response.data);
        alert(`El paquete ${info.id} ha sido actualizado con éxito`);
      })
      .catch(error => {
        console.error('Error updating data in the database:', error);
      });
  };  
                    
  return(
    <div className="App">
      <div className="container">
        <h6 className="title">Paquete</h6>
        <hr className="title"/>
        <div className="row justify-content-evenly">
          <div className="col-4">
            {
                           images.map(image =>(
                                <img key={image} src={`http://localhost:4000/images/${image}`} className="img-fluid" alt="..."/>
                           ))
                        }
          </div>
          <div className="col-4">
            <label htmlFor="inputName" className="form-label">Nombre</label>
            <input className="form-control" type="text" value={formData.nombre} name="nombre" onChange={handleChange}/>
            <label htmlFor="inputName" className="form-label">Destino</label>
            <input className="form-control" type="text" value={formData.destino} name="destino" onChange={handleChange}/>
            <label htmlFor="inputTime" className="form-label"> Duracion </label>
            <input className="form-control" type="text" value={formData.duracion} name="duracion" onChange={handleChange}/>
            <label htmlFor="inputInit" className="form-label"> Comienzo </label>
            <input className="form-control" type="text" value={date(formData.comienzo)} name="comienzo" onChange={handleChange}/>
            <label htmlFor="inputEnd" className="form-label">Fin</label>
            <input className="form-control" type="text" value={date(formData.fin)} name="fin" onChange={handleChange}/>
            <label htmlFor="inputExit" className="form-label">Salida</label>
            <input className="form-control" type="text" value={formData.salida} name="salida" onChange={handleChange}/>
            <label htmlFor="inputDescrip" className="form-label">Descripción</label>
            <textarea className="form-control" type="text" value={formData.descripcion} name="descripcion" onChange={handleChange}></textarea>
            <label htmlFor="inputCupos" className="form-label">Cupos</label>
            <input className="form-control" type="text" value={formData.cupos} name="cupos" onChange={handleChange}/>
            <label htmlFor="inputExcursions" className="form-label">Excursiones</label>
            <input className="form-control" type="text" value={formData.excursiones} name="excursiones" onChange={handleChange} />
            <label htmlFor="inputHotels" className="form-label">Hoteles</label>
            <input className="form-control" type="text" value={formData.hoteles} name="hoteles" onChange={handleChange}/>
            <label htmlFor="inputTransp" className="form-label">Transporte</label>
            <input className="form-control" type="text" value={formData.transporte} name="transporte" onChange={handleChange}/>
            <label htmlFor="inputExcursions" className="form-label">Precio</label>
            <input className="form-control" type="text" value={formData.precio} name="precio" onChange={handleChange}/>
            <button onClick={handleSubmit} className="btn btn-success">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default UpdatePackage;