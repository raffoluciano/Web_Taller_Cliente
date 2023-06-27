import logo from '../../public/logoAHORA.png';

export const DestinyCard = ({ destino, id, imagen1 }) => {
  return (
    <>   
          <div className="card">
            <img src={`http://localhost:4000/images/${imagen1}`} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h6 className="card-title1"><b>{ destino }</b></h6>
            </div>
          </div>
    </>
  )
}
