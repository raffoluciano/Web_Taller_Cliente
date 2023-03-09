import '../App.css';
import logo from '../../public/logoAHORA.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import date from '../utils/date';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='container'>
            {cartItems.map((item, index) => (
                <div key={index} className="card shadow-lg mb-3 bg-white rounded">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src={logo} alt="Logo"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">{item.nombre}</h6> {/* Muestra el nombre del paquete */}
                                <h2 className="card-title">{date(item.comienzo)}</h2> {/* Muestra la fecha del paquete */}
                                <h6 className="card-title">{item.quantity}</h6> {/* Muestra la cantidad del paquete */}
                                <div className="col-md-3 offset-md-3 align-self-end">${item.precio}</div> {/* Muestra el precio del paquete */}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                <button type="button" className="btn btn-success">Finalizar compra</button>
            </div>
        );
    }
    export default Cart;