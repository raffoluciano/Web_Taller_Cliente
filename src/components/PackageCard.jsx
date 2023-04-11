import logo from '../../public/logoAHORA.png';
import { Link } from 'react-router-dom';
import date from '../utils/date';
export const PackageCard = ({ nombre, cupos, precio, salida, comienzo, duracion, fin, id }) => {
  return (
    <>
          
            <div className="card-packages">
              <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                       <h6 className="card-title"><b> { nombre } </b></h6>
                        <h6 className="card-title1"><b>Salida: </b> { date(comienzo) }</h6>
                        <h6 className="card-title1"><b>Duración: </b>{ duracion } días</h6>
                        <h6 className="card-title-price">$ { precio }</h6>
                        </div>  
              <Link to={`/package/${id}`}>
                <button type="button">
                  Ver más
                </button>
              </Link>
            </div>

    </>
  )
}