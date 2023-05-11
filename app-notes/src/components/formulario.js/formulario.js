import React from "react";

function Formulario(props) {
    return (
    <form className="tareaFormulario">
        <input 
        className="tareaInput"
        type='text'
        placeholder="Escirbe una nota"
        name='texto'
        />
        <button className="tareaBoton">
            Agregar Notas 
        </button>
    </form>
)
}export default Formulario