import React from 'react'

import firebaseApp from '@/firebase/firebaseconfig';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styles from '../login/login.module.css';



//guardar en constante
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


export default function ButtonLogin() {
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <button className={styles.btnGoogle} onClick={loginWithGoogle} >  GOOGLE </button>
    )
}


