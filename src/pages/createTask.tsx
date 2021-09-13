import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { addTodoAsync } from '../redux/todoSlice';

import styles from '../styles/createTask.module.scss';

const CreateTask = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errorPath, setErrorPath] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const router = useRouter();

    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            let schema = yup.object().shape({
                title: yup.string()
                    .required('Título obrigatório')
                    .min(1)
                    .max(100, 'Máximo 100 caracteres'),
                description: yup.string()
                    .nullable()
                    .max(1024, 'Máximo 1024 caracteres'),
            });
        
            await schema.validate({
                title: taskName,
                description: taskDescription,
                abortEarly: false,
            })
        }

        catch(err: any) {
            setErrorPath(err.path);
            setErrorMessage(err.message)
            return;
        };

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
                            <div className={styles.titles}>
                                Nome da tarefa
                                {(errorPath == 'title') && <p className={styles.errorMessage} >{errorMessage}</p>}
                            </div>
                            <input 
                                className={(errorPath == 'title') ? styles.nameInputError : styles.nameInput} 
                                type="text" 
                                value={taskName} 
                                onChange={(event) => setTaskName(event.target.value)} 
                            />
                        </label>

                        <label className={styles.label}>
                            <div className={styles.titles}>
                                Descrição da tarefa
                                {(errorPath === 'description') && <p className={styles.errorMessage} >{errorMessage}</p>}
                            </div>
                            <textarea 
                                className={(errorPath === 'description') ? styles.descriptionInputError : styles.descriptionInput}
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