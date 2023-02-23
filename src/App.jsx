import './App.css';
import Home from './components/Home';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Provider store={ store }> 
            <BrowserRouter>
              <AppRouter/>
            </BrowserRouter>
        </Provider>
      </AuthProvider>
    </div> 
  )
}

export default App;


