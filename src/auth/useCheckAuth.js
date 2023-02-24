import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/auth/authSlice";
import { auth } from "./firebase";

export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( auth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName } = user;
            dispatch( login({ uid, email, displayName }) );
        })
    }, []);

    return status;
}