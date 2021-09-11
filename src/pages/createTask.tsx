import Link from 'next/link';

import styles from '../styles/createTask.module.scss';

const CreateTask = () => {    
    return (
       <div className={styles.background} >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Criar tarefa</h2>
                    <form>
                        <label className={styles.label}>
                            Nome da tarefa
                            <input className={styles.nameInput} type="text" />
                        </label>

                        <label className={styles.label}>
                            Descrição da tarefa
                            <textarea className={styles.descriptionInput} />
                        </label>  
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

export default CreateTask;