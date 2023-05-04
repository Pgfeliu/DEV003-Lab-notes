import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import { context } from '../context/authContext';
import { useState } from 'react';

export default function Login() {
  // function ingresarGoogle() {
  //   console.log("click")
  // }
  const { user, setUser } = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

    return (

      <form>
        <label htmlFor='email'> Email </label>
        <input type="email" name="email" id="email" placeholder="correo@gmail.com" onChange={handleChange} />


        <label htmlFor='password'> Contraseña </label>
        <input type="password" name="password" id="password" placeholder="Escriba su contraseña aquí" onChange={handleChange} />

        <button> Registrar </button>
      </form>
    )
  }
  // <section className={styles.contenedor}>

  //   <h1 className={styles.title}> CREATE ALL NOTES</h1>
  //   <div className={styles.contenedortwo}>
  //     <button onClick={ingresarGoogle} type="button" className={styles.btnGoogle}> Continuar con Google </button>



  //   </div>
  // </section>

