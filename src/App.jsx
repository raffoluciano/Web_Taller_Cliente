import './App.css';
import Home from './components/Home';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div> 
  )
}

export default App;


