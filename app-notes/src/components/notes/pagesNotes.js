import React from 'react';
import styles from './pagesNotes.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'; 

function PageNotes({ texto, completada }) {
    return (
        <div className={completada ? 'tareasContenedor completada' : 'tareasContenedor'}>
            <div className={styles.tareaTexto}>
                {texto}
            </div>
            <div className={styles.contenedorIconos}>
                <AiOutlineCloseCircle className={styles.deleteIcon} />
            </div>
        </div>
    )
}

export default PageNotes;
