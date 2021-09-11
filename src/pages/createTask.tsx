import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodoAsync } from '../redux/todoSlice';

import styles from '../styles/createTask.module.scss';

const CreateTask = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const dispatch = useDispatch();

    const router = useRouter();

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(
            addTodoAsync({
                title: taskName,
                description: taskDescription,
            })
        );
        router.push('/');
    };
    
    return (
       <div className={styles.background} >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Criar tarefa</h2>
                    <form onSubmit={onSubmit}>
                        <label className={styles.label}>
                            Nome da tarefa
                            <input 
                                className={styles.nameInput} 
                                type="text" 
                                value={taskName} 
                                onChange={(event) => setTaskName(event.target.value)} 
                            />
                        </label>

                        <label className={styles.label}>
                            Descrição da tarefa
                            <textarea 
                                className={styles.descriptionInput}
                                value={taskDescription}
                                onChange={(event) => setTaskDescription(event.target.value)} 
                            />
                        </label>

                        <div className={styles.buttons}>
                            <Link href="/">
                                <a className={styles.actionButton}>CANCELAR</a>
                            </Link>
                        <button className={styles.actionButton} type="submit">SALVAR</button>
                    </div>    
                    </form>
                    
                </div>                     
            </div>
        </div>
    );
};

export default CreateTask;