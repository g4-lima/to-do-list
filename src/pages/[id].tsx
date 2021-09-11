import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleComplete } from '../redux/todoSlice';
import { updateTodo } from '../redux/todoSlice';

import styles from '../styles/editTask.module.scss';

interface iState {
    todos: [];
  }

interface iTodo {
    id: number | string;
    title: string;
    description: string;
    completed: boolean;
  } 

const EditTask = () => {
    const router = useRouter();
    const { id } = router.query;

    const todo = useSelector((state: iState) => state.todos.filter((todo: iTodo) => todo.id == id));

    const title = todo.map((task: iTodo) => task.title).shift();
    const description = todo.map((task: iTodo) => task.description).shift();

    const [taskName, setTaskName] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({
            id: todo.map(((task: iTodo) => task.id)).shift(),
            completed: !todo.map(((task: iTodo) => task.completed)).shift()
        }));
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        dispatch(
            updateTodo ({
                id: todo.map(((task: iTodo) => task.id)).shift(),
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
                    <h2>Editar tarefa</h2>
                    
                        {todo.map((task: iTodo) => (
                            <form key={task.id} onSubmit={onSubmit}>
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

                            <div className={styles.concludedButtons}>
                                <button
                                    type="button" 
                                    className={!task.completed ? styles.selectedButton : styles.unselectedButton}
                                    onClick={handleCompleteClick}
                                >
                                    Em progresso
                                </button>
                                <button
                                    type="button" 
                                    className={task.completed ? styles.selectedButton : styles.unselectedButton}
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