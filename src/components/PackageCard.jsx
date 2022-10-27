import { PackageInfoModal } from "./PackageInfoModal"

export const PackageCard = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id }) => {
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> { nombre }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Precio: { precio }</h6>
                <p className="card-text">Cupos: { cupos } </p>
            </div>

            <PackageInfoModal 
                id={ id }
                nombre={ nombre} 
                cupos={ cupos }
                precio ={ precio }
                salida = { salida }
                comienzo = { comienzo }
                duracion = { duracion }
                fin = { fin }/>
        </div>


        
    </>
  )
}
