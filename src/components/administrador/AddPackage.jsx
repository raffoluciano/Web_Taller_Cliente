import { useState } from 'react';
import {createPackage} from '../../utils/createdata';

const AddPackage = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id, descripcion, excursiones, hoteles, activo }) => {

    const [formData, setFormData] = useState({
        nombre: '',
        destino: '',
        comienzo: '',
        fin: '',
        duracion: '',
        salida: '',
        descripcion: '',
        cupos: '',
        excursiones: '',
        hoteles: '',
        transporte: ''
    });

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const myFormatedData = {
            "nombre": formData.nombre,
            "destino": formData.destino,
            "precio": formData.precio,
            "comienzo": new Date(formData.comienzo),
            "fin": new Date(formData.fin),
            "duracion": formData.duracion,
            "salida": formData.salida,
            "descripcion": formData.descripcion,
            "cupos": formData.cupos,
            "excursiones": formData.excursiones,
            "hoteles": formData.hoteles,
            "transporte": formData.transporte
          }
          createPackage(myFormatedData)
            .then(formData => {
              console.log('Data has been loaded to the database:', formData);
              alert(`El paquete ${formData.id} ha sido agregado con éxito`);
            })
            .catch(error => {
              console.error('Error loading data to the database:', error);
            });
        }
    
    return(
        <>
        <div className="container">
        <h6 className="title">Agregar paquete</h6>
        <hr className="title"/>
            <div class="row justify-content-evenly">
                <div class="col-5">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input class="form-control" type='text' value={ formData.nombre} onChange={handleInputChange} name="nombre"/>
                </div>
                <div class="col-5">
                    <label for="inputDestiny" class="form-label">Destino</label>
                    <input class="form-control" type='text' value={formData.destino} onChange={handleInputChange} name="destino"/>    
                </div>
                <div class="col-5">
                    <label for="inputInit" class="form-label">Precio</label>
                    <input class="form-control" type='text' value={formData.precio} onChange={handleInputChange} name="precio"/>
                </div>
                <div class="col-5">
                    <label for="inputInit" class="form-label">Comienzo</label>
                    <input class="form-control" type='text' value={formData.comienzo} onChange={handleInputChange} name="comienzo"/>
                </div>
                <div class="col-5">
                    <label for="inputEnd" class="form-label">Fin</label>
                    <input class="form-control" type='text' value={formData.fin} onChange={handleInputChange} name="fin"/>
                </div>
                <div class="col-5">
                    <label for="inputTime" class="form-label">Duracion</label>
                    <input class="form-control" type='text' value={formData.duracion} onChange={handleInputChange} name="duracion"/>
                </div>
                <div class="col-5">
                    <label for="inputExit" class="form-label">Salida</label>
                    <input class="form-control" type='text' value={formData.salida} onChange={handleInputChange} name="salida"/>
                </div>
                <div class="col-5">
                    <label for="inputDescrip" class="form-label">Descripción</label>
                    <textarea className="form-control" type='text' value={formData.descripcion} onChange={handleInputChange} name="descripcion"></textarea>
                </div>
                <div class="col-5">
                    <label for="inputCupos" class="form-label">Cupos</label>
                    <input class="form-control" type='text' value={formData.cupos} onChange={handleInputChange} name="cupos"/>
                </div>
                <div class="col-5">
                    <label for="inputExcursions" class="form-label">Excursiones</label>
                    <textarea className="form-control" type='text' value={formData.excursiones} onChange={handleInputChange} name="excursiones"></textarea>
                </div>
                <div class="col-5">
                    <label for="inputHotels" class="form-label">Hoteles</label>
                    <textarea className="form-control" type='text' value={formData.hoteles} onChange={handleInputChange} name="hoteles"></textarea>
                </div>
                <div class="col-5">
                    <label for="inputTransps" class="form-label">Transportes</label>
                    <textarea className="form-control" type='text' value={formData.transportes} onChange={handleInputChange} name="transportes"></textarea>
                </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-4">
                        <button type="button" onClick={ handleSubmit } className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#modal${formData.nombre}`}>
                            Cargar
                        </button>
                    </div>
                </div>        
                <div className="modal fade" id={`modal${formData.nombre}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">{ formData.nombre }</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p> <b> Destino: </b>  { formData.destino } </p>
                                <p> <b> Cupos: </b>  { formData.cupos } </p>
                                <p> <b> Precio: </b> $ { formData.precio } </p>
                                <p> <b> Duracion: </b> { formData.duracion }</p>
                                <p> <b> Comienzo: </b> { formData.comienzo }</p>
                                <p> <b> Salida: </b> { formData.salida }</p>
                                <p> <b> Fin: </b> { formData.fin }</p>
                                <p> <b> Descripcion: </b> { formData.descripcion }</p>
                                <p> <b> Excursiones: </b> { formData.excursiones }</p>
                                <p> <b> Hoteles: </b> { formData.hoteles }</p>      
                                <p> <b> Transporte: </b> { formData.transporte }</p>                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
       </>
    )
}

export default AddPackage; 
//Alerta de agregado
//<div class="alert alert-success" role="alert">
//    Agregado con exito!
//</div>