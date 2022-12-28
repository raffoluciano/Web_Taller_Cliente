import '../App.css';
import logo from '../../public/logoAHORA.png';

const Cart = () => {
    return(
        <div className='container'>        
            <div class="card  shadow-lg mb-3 bg-white rounded" >
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src={logo}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title"> Nombre del paquete</h6>
                        <h2 class="card-title">Fecha</h2>
                        <h6 class="card-title">Cantidad</h6>
                        <div class="col-md-3 offset-md-3 align-self-end">$$$$$</div>
                    </div>
                </div>
            </div>
            </div>
            <button type="button" class="btn btn-success">Finalizar compra</button>
        </div>
    );
}

export default Cart;