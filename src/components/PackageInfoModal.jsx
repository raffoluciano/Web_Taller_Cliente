
export const PackageInfoModal = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id }) => {
  return (
    <>
        <button type="button" className="btn btn-primary ms-1 me-1 mb-1" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
        Mas info!!!
        </button>

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
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
            </div>
            </div>
        </div>
        </div>
    </>
    
  )
}
