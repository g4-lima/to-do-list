import type { NextPage } from 'next';

import styles from './styles.module.scss';

const CreateTaskMenu: NextPage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Criar tarefa</h2>
                    <form>
                        <label className={styles.label}>
                            Nome da tarefa
                            <input type="text" />
                        </label>

                        <label className={styles.label}>
                            Descrição da tarefa
                            <textarea className={styles.description} />
                        </label>
               
                        <div className={styles.buttons}>
                            <button>CANCELAR</button>
                            <button type="submit">SALVAR</button>
                        </div>     
                    </form>
                </div>                     
            </div>
        </div>
    );
};

export default CreateTaskMenu;