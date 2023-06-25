import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import date from '../utils/date';
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

    

    const { cartItems, removeFromCart } = useContext(CartContext);

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
                
                <div className='carrito-vacio'>
                    <p><b>El carrito está vacío.</b></p>
                </div>
            ) : (
                    <div>
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