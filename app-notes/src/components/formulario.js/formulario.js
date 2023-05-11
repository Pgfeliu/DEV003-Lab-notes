import React, { useState } from "react";
import { Form } from "react-router-dom";

function Formulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        // console.log('Escribiendo...');
        setInput(e.target.value) /*extrayendo el valor */
        // console.log(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault(); /*permite que no se vuelva a cargar toda la app cuando enviamos el formulario */       
        console.log('Enviando formulario');
        


        const tareaNueva = {
    
            id: '34545',
            texto: input, /*valor de input*/
            completada : false
        }
       
        }
    


    return (
        <form
            className="tareaFormulario"
            onSubmit={manejarEnvio}>
            <input
                className="tareaInput"
                type='text'
                placeholder="Escribe una nota aquí"
                name='texto'
                onChange={manejarCambio} /*Cuando ocurre cambio en valor de input*/
            />
            <button className="tareaBoton">
                Agregar Notas
            </button>
        </form>
    )
} export default Formulario