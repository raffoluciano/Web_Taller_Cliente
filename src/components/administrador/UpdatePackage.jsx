
const UpdatePackage = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id, descripcion, excursiones, hoteles, activo }) => {

    return (
        <>
            <div className="container">
                <h6 className="title">Actualizar paquete</h6>
                <hr className="title"/>
                <div className="row">
                    <div class="row justify-content-evenly">
                        <div class="col-5">
                            <label for="inputName" class="form-label">Ingrese ID del paquete que desea actualizar</label>
                            <input class="form-control" id="inputName"/>
                            <div class="row justify-content-end">
                        </div>
                        </div>
                    </div>
                </div>
            <div class="row justify-content-end">
            <div class="col-4">
            <button type="button" className="btn btn-primary ms-1 me-1 mb-1" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
            Buscar
            </button>
            </div>
            </div>
            <div className="modal fade" id={`modal${id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{ nombre }</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p> <b> Cupos: </b>  { cupos } </p>
                    <p> <b> Precio: </b> $ { precio } </p>
                    <p> <b> Duracion: </b> { duracion }</p>
                    <p> <b> Comienzo: </b> { comienzo }</p>
                    <p> <b> Salida: </b> { salida }</p>
                    <p> <b> Fin: </b> { fin }</p>
                    <p> <b> Descripcion: </b> { descripcion }</p>
                    <p> <b> Excursiones: </b> { excursiones }</p>
                    <p> <b> Hoteles: </b> { hoteles }</p>
                    <p> <b> Activo: </b> { activo }</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Actualizar</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default UpdatePackage;

//Cuando se busca el id, que lo muestre en el mismo formato que el carrito

/*<div class="card  shadow-lg mb-3 bg-white rounded" >
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src={logo}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title"> Nombre del paquete</h6>
                        <h2 class="card-title">Fecha</h2>
                        <h6 class="card-title">Cantidad</h6>
                        <div class="col-md-3 offset-md-3 align-self-end">$$$$$</div>
                    </div>
                </div>
            </div>
            </div>
*/