import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {

        const result = await signInWithPopup(auth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, uid } = result.user;
        
        return {
            ok: true,
            // User info
            displayName, email, uid
        }

    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }

}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( auth, email, password );
        const { uid } = resp.user;

        await updateProfile( auth.currentUser, { displayName });

        return {
            ok: true,
            uid, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}


export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( auth, email, password );
        const { uid, displayName } = resp.user;

        return {
            ok: true,
            uid, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await auth.signOut();
}