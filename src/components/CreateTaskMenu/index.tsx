import { useState } from 'react';

import styles from './styles.module.scss';

interface ICreateTaskMenu {
    visibility: boolean;
}

const CreateTaskMenu = (props: ICreateTaskMenu) => {
    const [visible, setVisible] = useState(props.visibility);
    
    return (
       <div className={visible? styles.background : styles.backgroundHidden} >
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
                        <button onClick={() => setVisible(false)}>CANCELAR</button>
                        <button type="submit">SALVAR</button>
                    </div>   
                </div>                     
            </div>
        </div>
    );
};

export default CreateTaskMenu;