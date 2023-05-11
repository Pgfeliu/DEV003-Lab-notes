import React from "react";
import Formulario from "../formulario.js/formulario";
import '../ListaDeTareas/listaDeTareas.module.css';
function ListaDeTareas() {
    return(
      <>
      <Formulario />
      <div className="tareasListaContenedor">
        Lista de Tareas

      </div>
      </>  
    )
}

export default ListaDeTareas;