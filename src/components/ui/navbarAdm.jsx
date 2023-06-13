import '../../App.css';
import logo from "../../../public/logoAHORA.png";
import user from "../../../public/user.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/slices/auth/thunks';



const NavbarAdm = () =>{

     const { email } = useSelector(state => state.auth);
     //console.log({email});

     const dispatch = useDispatch();


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
          <Link to="/HomeAdm"><li>Inicio</li></Link>
          <Link to="/Agregar"><li><a>Agregar</a></li></Link>
        </ul>
        {email && <button className='logout-button' onClick={onLogout}> salir </button>}
      </div>
      <div className="navbar-img">
      <Link to="/login"><img src={user}/></Link>
      </div>
    </div>
  </header>
);
};

export default NavbarAdm;