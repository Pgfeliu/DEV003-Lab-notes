import React from 'react'

import firebaseApp from '@/firebase/firebaseconfig';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styles from '../login/login.module.css';
import { Form } from 'react-router-dom';

//guardar en constante
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function ButtonLogin() {
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <button className={styles.btnGoogle} onClick={loginWithGoogle} >  GOOGLE </button>
    )
}

export default ButtonLogin;
