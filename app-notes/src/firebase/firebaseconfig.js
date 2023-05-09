import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBa5NkK6Ayguo0z80BOU6dQE57uBfgZYuE",
    authDomain: "app-notes-ab9ea.firebaseapp.com",
    projectId: "app-notes-ab9ea",
    storageBucket: "app-notes-ab9ea.appspot.com",
    messagingSenderId: "177071837603",
    appId: "1:177071837603:web:bf48b22c3e35697d2dca16",
    measurementId: "G-5Z2GPWFZ06"
  };

// //Iniciar Firebase
const firebaseApp = initializeApp(firebaseConfig)


export default firebaseApp;



