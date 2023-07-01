import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import date from '../utils/date';
import { Payment, CardPayment, Wallet } from '@mercadopago/sdk-react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useSelector } from 'react-redux';

initMercadoPago('TEST-ac5dadd0-812f-4e1f-803f-edfe318724e9', { locale: 'es-AR'});

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

    const { email } = useSelector(state => state.auth);

    console.log('mail',email);

    const { cartItems, removeFromCart } = useContext(CartContext);

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.precio;
        });
        return totalPrice;
    }

    const getPreferenceId = () => {

    }

    return (
        <div className='container'>
            {cartItems.length === 0 ? (
                
                <div className='carrito-vacio'>
                    <p><b>El carrito está vacío.</b></p>
                </div>
            ) : (
                    <div>
                        <h6><b>Usuario: {email}</b></h6>
                    {cartItems.map((item, index) => {
                        console.log({item})
                        return (
                            <div key={index} className="card shadow-lg mb-3 bg-white rounded">
                                <div className="row">
                                        <img className="col-md-4" src={`http://localhost:4000/images/${item.imagen1}`} alt="Logo"/>
                                    <div className="col-md-8">
                                        <div className='cart-body'>
                                            <h6 className="card-title"><b>{item.nombre}</b></h6> {/* Muestra el nombre del paquete */}
                                            <h5 className="card-title1"><b>Salida: </b>{date(item.comienzo)}</h5> {/* Muestra la fecha del paquete */}    
                                        </div>
                                        <h5 className='price'><b>${item.precio}</b></h5> {/* Muestra el precio del paquete */}
                                        <button className='boton-eliminar' onClick={() => removeFromCart(index)}>Eliminar</button>
                                    </div>
                                    </div>
                                        </div>
                        )
                    })}

                    <div className='cart-price'>
                    <h4><b>Total de compra: ${getTotalPrice()}</b></h4>
                    </div>
                    <div>
                        <Payment
                            initialization={initialization}
                            customization={customization}
                            onSubmit={async (param) => {
                                console.log(param);
                            }}
                        />
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;

//https://www.mercadopago.com.ar/developers/es/docs/woocommerce/additional-content/test-cards