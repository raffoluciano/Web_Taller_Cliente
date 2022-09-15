import { useEffect, useState } from 'react';
import './App.css';
import { getPackage, getPackageById, getCountry, getUser } from './utils/getdata';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Home from './components/Home';
import Packages from './components/Packages';
import { useParams } from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser().then(us => setUsers(us));
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

//EJ PARA PROBAR TRAE LOS DATOS DE LAS FUNCIONES SIN PASAR PARAMETROS
/*
const [users, setUsers] = useState([]);
  useEffect(() => {
    [nombre de la funcion]().then(us => setUsers(us));
  },[])

  Lo de abajo queda igual
*/

//EJ PARA PROBAR SI TRAE LOS DATOS DE LAS FUNCIONES QUE RECIBEN UN PARAMETRO ID

/*
const {id} = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
      setUsers (await getPackageById(id));
    }
    consultarApi();
  },[])


  <ul>
          {
            users.map(user => (
              <li key={user.id}>{user.descripcion}</li>) //cambiar el campo dni a id, y el otro que se quiera mostrar p/prueba
            )
          }
  </ul>
*/
