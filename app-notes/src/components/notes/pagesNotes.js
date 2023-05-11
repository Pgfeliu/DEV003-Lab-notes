import React from 'react';
import styles from './pagesNotes.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'; 

function PageNotes({ id,texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tareasContenedor completada' : 'tareasContenedor'}>
            <div 
            className={styles.tareaTexto}
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
            className={styles.contenedorIconos}
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className={styles.deleteIcon} />
            </div>
        </div>
    )
}

export default PageNotes;
