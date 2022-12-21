import logo from '../../public/logoAHORA.png';

export const DestinyCard = ({ nombre, id }) => {
  return (
    <>
          <div className="card">
            <img src={logo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h6 className="card-title">{ nombre }</h6>
            </div>
          </div>
          
    </>
  )
}
