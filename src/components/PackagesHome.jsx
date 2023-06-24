import logo from '../../public/logoAHORA.png';
import { Link } from 'react-router-dom';
import date from '../utils/date';
export const PackagesHome = ({imagen1, nombre, comienzo, id }) => {
  if(comienzo <= '2023-12-02'){
  return (
    <>
          
            <div className="card-packages">
              <img src={`http://localhost:4000/images/${imagen1}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                       <h6 className="card-title"><b> { nombre } </b></h6>
                        <h6 className="card-title1"><b>Salida: </b> { date(comienzo) }</h6>
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
}