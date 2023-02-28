import './App.css';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Provider store={ store }> 
            <BrowserRouter>
              <AppRouter/>
            </BrowserRouter>
        </Provider>
        </CartProvider>
    </div> 
  )
}

export default App;


