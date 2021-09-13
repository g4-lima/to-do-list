import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { getTodoAsync, updateTodoAsync } from '../redux/todoSlice';

import styles from '../styles/editTask.module.scss';

interface iTodo {
    guid: string;
    title: string;
    description: string;
    situation: "completed" | "uncompleted";
  }
  
  interface iState {
    todos: [iTodo];
  }

const EditTask = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const { id } = router.query;

    const todo = useSelector((state: iState) => state.todos.filter((todo) => todo.guid === id));

    useEffect(() => {
        dispatch(getTodoAsync());
      }, [dispatch]);

    const title = todo.map((task: iTodo) => task.title).shift();
    const description = todo.map((task: iTodo) => task.description).shift();
    const situation = todo.map((task: iTodo) => task.situation).shift();

    const [taskName, setTaskName] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCompleted, setTaskCompleted] = useState(situation);
    const [errorPath, setErrorPath] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUncompleteClick = () => {
        setTaskCompleted("uncompleted")
    };

    const handleCompleteClick = () => {
       setTaskCompleted("completed")
    };

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
            updateTodoAsync ({
                guid: id,
                title: taskName,
                description: taskDescription,
                situation: taskCompleted,
            })
        );
        router.push('/');

    };

    return (
       <div className={styles.background} >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Editar tarefa</h2>
                    
                        {todo.map((task: iTodo) => (
                            <form key={task.guid} onSubmit={onSubmit}>
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

                            <div className={styles.concludedButtons}>
                                <button
                                    type="button" 
                                    className={(taskCompleted === "uncompleted") ? styles.selectedButton : styles.unselectedButton}
                                    onClick={handleUncompleteClick}
                                >
                                    Em progresso
                                </button>
                                <button
                                    type="button" 
                                    className={(taskCompleted === "completed") ? styles.selectedButton : styles.unselectedButton}
                                    onClick={handleCompleteClick}
                                >
                                    Concluído
                                </button>
                            </div>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <a className={styles.actionButton}>CANCELAR</a>
                                </Link>
                                <button 
                                    className={styles.actionButton} 
                                    type="submit"
                                >
                                    SALVAR
                                </button>
                            </div>     
                        </form>
                        ))}
                </div>                     
            </div>
        </div>
    );
};

export default EditTask;