import './App.css';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
        <Provider store={ store }> 
            <BrowserRouter>
              <AppRouter/>
            </BrowserRouter>
        </Provider>
    </div> 
  )
}

export default App;


