import { useEffect, useState } from 'react';
import './App.css';
import { getUsuarios } from './services/usuarioService';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Home from './components/Home';
import Packages from './components/Packages';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsuarios().then(us => setUsers(us));
  },[])
  
  console.log(users)

  return (
    <div className="App">
    <Navbar/>
    <Packages/>
    <Footer/>

      <ul>
        {
          users.map(user => (
            <li key={user.dni}>{user.nombre}</li>)
          )
        }
      </ul>

    </div> 
  )

}

export default App;
