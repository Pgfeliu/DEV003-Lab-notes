import Head from 'next/head'

// import styles from '../styles/Home.module.css';
import '../components/login/login.module.css';
import ButtonLogin from '@/components/login/login'
import firebaseApp from '@/firebase/firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import styles from '../components/index.module.css';
import Login from '@/components/login/login';
import PageNotes from '../components/notes/pagesNotes';
import Formulario from '@/components/formulario.js/formulario';


const auth = getAuth(firebaseApp);


export default function Home() {
  const usuarioGlobal = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {

    <Login />
    //revisar si se inició o cerró sesión
    //Primero hay que ver si "usuarioFirebase existe"
    // if(usuarioFirebase) {
    //   usuarioGlobal(usuarioFirebase);
    //   // console.log('usuarioFirebase Existe');
    // } else{
    //   usuarioGlobal(null);

    // }

  })

  return (

    <>
      <div className={styles.navigation}>
        <h1>PET NOTES</h1>
      </div>
      <div className={styles.boxNotes}>
        <h1 className={styles.titleBoxNotes}>Tareas</h1>
        {/* < Login /> */}
        < PageNotes/>
        < Formulario />
        
      </div>

    </>



  )
}