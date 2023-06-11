import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/auth/authSlice";
import { auth } from "./firebase";
import { getRoleUserByEmail } from "../utils/getdata";

//controla que no se cierre la secion de google 
export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged( auth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName } = user;

            const data = await getRoleUserByEmail(email);

            let rol = null

            if(data.length !== 0 || !data){
                rol = data[0].nombre
            }

            dispatch( login({ uid, email, displayName, rol }) );
        })
    }, []);

    return status;
}