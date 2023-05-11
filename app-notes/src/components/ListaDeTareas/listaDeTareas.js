import React,{useState} from "react";
import Formulario from "../formulario.js/formulario";
import '../ListaDeTareas/listaDeTareas.module.css';
import PageNotes from "../notes/pagesNotes";


function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log("tarea agregada");
        console.log(tarea);
    }

    return( 
      <>
      <Formulario />
      <div className="tareasListaContenedor">
        {
           tareas.map((tarea) => 
           <PageNotes
           texto={tarea.texto}
           completada={tarea.completada}/>
            ) 
        };
      </div>
      </>  
    )
}

export default ListaDeTareas;