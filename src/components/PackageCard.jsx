import { PackageInfoModal } from "./PackageInfoModal"
import logo from '../../public/logoAHORA.png';
import { Link } from 'react-router-dom';

export const PackageCard = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id }) => {
  return (
    <>
          
            <div className="card-packages">
              <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                       <h6 className="card-title"><b> { nombre } </b></h6>
                        <h6 className="card-title1">{ comienzo }</h6>
                        <h6 className="card-title1">{ duracion } días</h6>
                        <h6 className="card-title-price">$ { precio }</h6>
                        </div>  
              <Link to={`/package:${id}`}>
              <button type="button" className="btn btn-primary ms-1 me-1 mb-1">
                Ver más
              </button>
              </Link>
            </div>

    </>
  )
}