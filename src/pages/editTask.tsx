import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/editTask.module.scss';

const EditTask = () => {  
    const [concluded, setConcluded] = useState(false);
    console.log(concluded);

    return (
       <div className={styles.background} >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Editar tarefa</h2>
                    <form>
                        <label className={styles.label}>
                            Nome da tarefa
                            <input className={styles.nameInput} type="text" />
                        </label>

                        <label className={styles.label}>
                            Descrição da tarefa
                            <textarea className={styles.descriptionInput} />
                        </label>

                        <div className={styles.concludedButtons}>
                            <button
                                type="button" 
                                className={!concluded ? styles.selectedButton : styles.unselectedButton}
                                onClick={() => setConcluded(false)}
                            >
                                Em progresso
                            </button>
                            <button
                                type="button" 
                                className={concluded ? styles.selectedButton : styles.unselectedButton}
                                onClick={() => setConcluded(true)}
                            >
                                Concluído
                            </button>
                        </div>  
                    </form>
                    <div className={styles.buttons}>
                        <Link href="/">
                            <a className={styles.actionButton}>CANCELAR</a>
                        </Link>
                        <button className={styles.actionButton} type="submit">SALVAR</button>
                    </div>   
                </div>                     
            </div>
        </div>
    );
};

export default EditTask;