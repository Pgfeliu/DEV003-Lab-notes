// import Head from 'next/head'
// import styles from '../styles/Home.module.css';
// import  '../components/login/login.module.css';
// import ButtonLogin from '@/components/login/login'
// import firebaseApp from '@/firebase/firebaseconfig';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useState } from 'react';
// import {PageNotes} from '../components/notes/pagesNotes';
// import '../components/App.module.css';

// const auth = getAuth(firebaseApp);


// export default function Prueba() {
//   const usuarioGlobal = useState(null);
// onAuthStateChanged(auth, (usuarioFirebase) => {
// //revisar si se inició o cerró sesión
// //Primero hay que ver si "usuarioFirebase existe"
// // if(usuarioFirebase) {
// //   usuarioGlobal(usuarioFirebase);
// //   // console.log('usuarioFirebase Existe');
// // } else{
// //   usuarioGlobal(null);

// // }

// })

//   return (
    
//     // <div className = {styles.background}>
//     //         <PageNotes />
//     //           <p className={styles.title}> ALL NOTES CREATES</p>
//     //         <div className={styles.backBtnGoogle}>
//     //           <ButtonLogin/>
//     //         </div>
//     //       </div>
    
//     <>
//     <div className='aplicacion-tareas'>
//       <p> aplicación Tareas</p>
//     </div>
//     <div className='tareas-listas-principal'>
//       <h1>Mis Tareas</h1>
//     </div>
        
//   </>  
        
      
   
//   )
// }