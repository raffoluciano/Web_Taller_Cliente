import './App.css';
import Home from './components/Home';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
      </AuthProvider>
    </div> 
  )
}

export default App;


