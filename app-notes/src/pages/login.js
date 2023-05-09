























// import styles from '../styles/Home.module.css';
// import { useState } from 'react';
// import { useAuth } from '../context/authContext';


// export default function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });



//   //Función para actualizar el estado [Quiero ver el nombre y valor del imput]
//   const handleChange = ({ target: { name, value } }) => {
//     // console.log(name, value);
//     setUser({ ...user, [name]: value });
//   };
//   const { signup } = useAuth();
//   //Función para ver qué tiene el estado
//   const handleSubmit = e => {
//     e.preventDefault()
//     signup(user.email, user.password)
//   }
 


//   return (

//     <form onSubmit={handleSubmit}>
//       <label htmlFor='email'> Email </label>
//       <input type="email" name="email" placeholder="correo@gmail.com" onChange={handleChange} />


//       <label htmlFor='password'> Contraseña </label>
//       <input type="password" name="password" id="password" placeholder="Escriba su contraseña aquí" onChange={handleChange} />

//       <button> Registrar </button>
//     </form>
//   )
// };



//useState = Guardar o registrar los datos del Usuario.
//handleChange = Me permite ir actualizando los datos que ingresa el usuario.
//setUser= Valor de name y password
//..user Vas a copiar todos los datos que tenga el usuario y luego actualizar.