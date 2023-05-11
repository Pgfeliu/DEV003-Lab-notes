import React, { useState } from "react";

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
            texto: 'Hola'
        }
       
        }
    


    return (
        <form
            className="tareaFormulario"
            onSubmit={manejarEnvio}>
            <input
                className="tareaInput"
                type='text'
                placeholder="Escirbe una nota"
                name='texto'
                onChange={manejarCambio} /*Cuando ocurre cambio en valor de input*/
            />
            <button className="tareaBoton">
                Agregar Notas
            </button>
        </form>
    )
} export default Formulario