import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleCompleteAsync, getTodoAsync, updateTodoAsync } from '../redux/todoSlice';

import styles from '../styles/editTask.module.scss';

interface iState {
    todos: [];
  }

interface iTodo {
    guid: string;
    title: string;
    description: string;
    situation: "completed" | "uncompleted";
  } 

const EditTask = () => {
    const dispatched = useDispatch();

    const router = useRouter();
    const { id } = router.query;

    const todo = useSelector((state: iState) => state.todos.filter((todo: iTodo) => todo.guid == id));

    // console.log(id);

    useEffect(() => {
        dispatched(getTodoAsync());
      }, [dispatched]);

    const title = todo.map((task: iTodo) => task.title).shift();
    const description = todo.map((task: iTodo) => task.description).shift();
    const situation = todo.map((task: iTodo) => task.situation).shift();

    const [taskName, setTaskName] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleCompleteAsync({
            guid: id,
            situation: (situation === "completed") ? "completed" : "uncomplited" || 
            (situation === "uncompleted") ? "uncompleted" : "complited"
        }));
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        dispatch(
            updateTodoAsync ({
                guid: id,
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
                            <form key={task.guid} onSubmit={onSubmit}>
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
                                    className={(task.situation === "uncompleted") ? styles.selectedButton : styles.unselectedButton}
                                    onClick={handleCompleteClick}
                                >
                                    Em progresso
                                </button>
                                <button
                                    type="button" 
                                    className={(task.situation === "completed") ? styles.selectedButton : styles.unselectedButton}
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