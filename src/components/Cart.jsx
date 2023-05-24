import '../App.css';
import logo from '../../public/logoAHORA.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import date from '../utils/date';
import { CardPayment, Wallet } from '@mercadopago/sdk-react';
import { Payment } from '@mercadopago/sdk-react';
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago('APP_USR-9f6e8024-c127-4a5d-a4a4-50af73d2540e', { locale: 'es-AR'});

const initialization = {
    amount: 100,
    preferenceId: '207446753-ea3adb2e-a4f2-41dd-a656-11cb01b8772c',
  };

  const customization = {
    paymentMethods: {
      atm: 'all',
      ticket: 'all',
      bankTransfer: ['pix'],
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };


const Cart = () => {

    

    const { cartItems } = useContext(CartContext);

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.precio;
        });
        return totalPrice;
    }

    return (
        <div className='container'>
            {cartItems.length === 0 ? (
                <div>
                    <h4><p>El carrito está vacío.</p></h4>
                </div>
            ) : (
                <div>
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
                                        <div className="col-md-3 offset-md-3 align-self-end">${item.precio}</div> {/* Muestra el precio del paquete */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>
                    <h4><p>Precio total: ${getTotalPrice()}</p></h4>
                        {/* <button type="button" className="btn btn-success">Finalizar compra</button> */}
                        {/* <CardPayment
                            initialization={{ amount: 10 }}
                            onSubmit={async (param) => {
                                console.log(param);
                            }}
                        /> */}
                        <Payment
                            initialization={initialization}
                            customization={customization}
                            onSubmit={async (param) => {
                                console.log(param);
                            }}
                        />
                        
                        {/* <Wallet
                            initialization={{
                                preferenceId: '239656545-89accc4d-3fc9-4835-828b-b8fa16b2fdce',
                                redirectMode: 'modal',
                            }}
                        />; */}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;


