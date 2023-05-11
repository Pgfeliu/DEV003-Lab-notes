import React from 'react';
import styles from './pagesNotes.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'; 

function PageNotes({ texto }) {
    return (
        <div className={styles.tareasContenedor}>
            <div className={styles.tareaTexto}>
                {texto}
            </div>
            <div className={styles.icono}>
                <AiOutlineCloseCircle className={styles.icono} />
            </div>
        </div>
    )
}

export default PageNotes;
