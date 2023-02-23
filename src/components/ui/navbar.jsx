import '../../App.css';
import logo from "../../../public/logoAHORA.png";
import shopping from "../../../public/shopping-cart.png";
import user from "../../../public/user.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getPackageByDestiny } from '../../utils/getdata';
import { getPackagesByNameDestiny } from '../../store/slices/package';
import { useDispatch } from 'react-redux';



const Navbar = () =>{

     const { user: userName } = useContext(AuthContext);
     const [searchValue, setSearchValue] = useState('');

     const navigate = useNavigate();
     const location = useLocation();

     const dispatch = useDispatch();

     const handleChange = (event) => { 
      setSearchValue(event.target.value)
     }

     const handleSearch = async(event) => {
      if (event.key === 'Enter') {
        const currentPath = location.pathname;

        if (searchValue === '' || searchValue === null) return 

        const isPackagePath = currentPath.includes('packages');

        if ( isPackagePath ) {
          dispatch(getPackagesByNameDestiny(searchValue));
        }
        else  {
          dispatch(getPackagesByNameDestiny(searchValue));
          navigate('/packages');
        }
      }
    };

    return (
        <header className="App-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <img className="logo" src={logo}/>
               <Link className="nav-link" to="/home">Home</Link> 
               <Link className="nav-link" to="/packages">Paquetes</Link>
               <Link className="nav-link" to="/contact">Contacto</Link>
               <div style={{display:'flex', alignItems: 'center', marginLeft:30}}>
                 <h6 style={{color: 'red'}}> {userName.email} </h6>
               </div>
               <div class="buscar">
                <input 
                  value={searchValue} 
                  onChange={handleChange}
                  type="text" 
                  placeholder="Buscar" 
                  required 
                  onKeyDown={handleSearch} 
                />
              </div>
                  <Link className="nav-link" to="/cart"><img src={shopping} className="carrito"/></Link>
                  <Link className="nav-link" to="/login"><img src={user} className="usuario"/></Link>
            </div>
          </div>
        </div>
      </nav>
      </header>
    );
}

export default Navbar;