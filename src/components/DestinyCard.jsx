import { Link } from '@mui/material';
import logo from '../../public/logoAHORA.png';

export const DestinyCard = ({ destino, id }) => {
  return (
    <>
          <div className="card">
            <img src={logo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h6 className="card-title">{ destino }</h6>
            </div>
            <Link to={`/package/${id}`}></Link>
          </div>
          
    </>
  )
}
