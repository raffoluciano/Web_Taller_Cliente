const DeletePackage = () => {

    return(
        <>
        <div className="container">
            <h6 className="title">Eliminar paquete</h6>
            <hr className="title"/>
                <div className="row">
                    <div class="row justify-content-evenly">
                        <div class="col-5">
                            <label for="inputName" class="form-label">Ingrese ID del paquete que desea eliminar</label>
                            <input class="form-control" id="inputName"/>
                            <button type="submit" class="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default DeletePackage;

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