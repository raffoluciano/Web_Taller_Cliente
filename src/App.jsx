import { useEffect, useState } from 'react';
import './App.css';
import { getUsuarios } from './services/usuarioService';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsuarios().then(us => setUsers(us));
  },[])
  
  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#">Inicio</a>
              <a className="nav-link" href="paquetes.html">Paquetes</a>
              <a className="nav-link" href="ofertas.html">Ofertas</a>
              <a className="nav-link" href="contacto.html">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
      </header>

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
