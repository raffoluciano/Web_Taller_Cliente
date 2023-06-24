import '../../App.css';
import logo from "../../../public/logoAHORA.png";
import shopping from "../../../public/shopping-cart.png";
import user from "../../../public/user.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { getPackageByDestiny } from '../../utils/getdata';
import { getPackagesByNameDestiny } from '../../store/slices/package';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/slices/auth/thunks';


const Navbar = () =>{

     const [searchValue, setSearchValue] = useState('');
     const { email } = useSelector(state => state.auth);
     //console.log({email});
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
        
        const upercaseSearchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
        console.log(upercaseSearchValue);
        const isPackagePath = currentPath.includes('packages');

        if ( isPackagePath ) {
          dispatch(getPackagesByNameDestiny(upercaseSearchValue));
        }
        else  {
          dispatch(getPackagesByNameDestiny(upercaseSearchValue));
          navigate('/packages');
        }
      }
    };

    const onLogout = () => {
      dispatch(startLogout());
    }

return (
  <header>
    <div className="navbar">
      <div className="navbar-logo">
      <Link to="/home"><img src={logo}/></Link>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/home"><li>Inicio</li></Link>
          <Link to="/packages"><li><a>Paquetes</a></li></Link>
          <Link to="/contact"><li><a>Contacto</a></li></Link>
        </ul>
        {email && <button className='logout-button' onClick={onLogout}> Salir </button>}
      </div>
      <div className="navbar-search">

      <input 
                  value={searchValue} 
                  onChange={handleChange}
                  type="text" 
                  placeholder="Buscar..." 
                  required 
                  onKeyDown={handleSearch} 
                />
      </div>
      <div className="navbar-img">
        <Link to="/cart"><img src={shopping}/></Link>
        <Link to="/login"><img src={user}/></Link>
      </div>
    </div>
  </header>
);
};

export default Navbar;