import '../App.css';
import logo from '../../public/logoAHORA.png';

const Cart = () => {
    return(
        <div className='container'>        
            <div className="card  shadow-lg mb-3 bg-white rounded" >
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={logo}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title"> Nombre del paquete</h6>
                        <h2 className="card-title">Fecha</h2>
                        <h6 className="card-title">Cantidad</h6>
                        <div className="col-md-3 offset-md-3 align-self-end">$$$$$</div>
                    </div>
                </div>
            </div>
            </div>
            <button type="button" class="btn btn-success">Finalizar compra</button>
        </div>
    );
}

export default Cart;