
const AddPackage = () => {
    
    return(
        <>
        <div className="container">
        <h6 className="title">Agregar paquete</h6>
        <hr className="title"/>
            <div class="row justify-content-evenly">
                <div class="col-5">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input class="form-control" id="inputName"/>
                </div>
                <div class="col-5">
                    <label for="inputDestiny" class="form-label">Destino</label>
                    <input class="form-control" id="inputDestiny"/>    
                </div>
                <div class="col-5">
                    <label for="inputInit" class="form-label">Comienzo</label>
                    <input class="form-control" id="inputInit"/>
                </div>
                <div class="col-5">
                    <label for="inputEnd" class="form-label">Fin</label>
                    <input class="form-control" id="inputEnd"/>
                </div>
                <div class="col-5">
                    <label for="inputTime" class="form-label">Duracion</label>
                    <input class="form-control" id="inputTime"/>
                </div>
                <div class="col-5">
                    <label for="inputExit" class="form-label">Salida</label>
                    <input class="form-control" id="inputExit"/>
                </div>
                <div class="col-5">
                <label for="inputDescrip" class="form-label">Descripción</label>
                <textarea className="form-control" id="Descript"></textarea>
                </div>
                <div class="col-5">
                    <label for="inputCupos" class="form-label">Cupos</label>
                    <input class="form-control" id="inputCupos"/>
                </div>
                </div>

                <div class="row justify-content-end">
                <div class="col-4">
                <div className="add">
                    <button type="submit" class="btn">Cargar</button>
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