import { useEffect, useState } from 'react';
import './App.css';
import { getUsuarios } from './services/usuarioService';
import { getPackage, getPackageById } from './utils/getdata';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Home from './components/Home';
import Packages from './components/Packages';

function App() {

  const [users, setUsers] = useState([]);
  //para probar traer la info de paquetes cambiar el getUsuarios de la linea
  //16 por "getPackage"
  useEffect(() => {
    getUsuarios().then(us => setUsers(us));
  },[])
  

  return (
    <div className="App">
      <Navbar/>
      <Packages/>
      <ul>
          {
            users.map(user => (
              <li key={user.dni}>{user.nombre}</li>) //cambiar el campo dni a id, y el otro que se quiera mostrar p/prueba
            )
          }
      </ul>
      <Footer/>

     

    </div> 
  )

}

export default App;


/*const [packages, setPackage] = useState([]);

  useEffect(() => {
    getPackage().then(pac => setPackage(pac));
  },[])
  
  console.log(packages)
  
  
  <ul>
        {
          packages.map(pack => (
            <li key={pack.id}>{pack.nombre}</li>)
          )
        }
      </ul>*/