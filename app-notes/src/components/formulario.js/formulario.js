import React, { useState } from "react";

function Formulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        console.log('Escribiendo...');

    }

    const manejarEnvio = e => {
        const tareaNueva = {
            id: '34545',
            texto: 'Hola'
        }
    }


    return (
        <form className="tareaFormulario">
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