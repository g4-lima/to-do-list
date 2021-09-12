import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import Taskbox from '../components/Taskbox';
import Searchbar from '../components/Searchbar';
import { getTodoAsync } from '../redux/todoSlice';

import styles from '../styles/home.module.scss';

interface iState {
  todos: [];
}

interface iTodo {
  guid: string;
  title: string;
  description: string;
  situation: "completed" | "uncompleted";
}

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: iState) => state.todos);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const [notFound, setNotFound] = useState(false);
  const [searchTasks, setSearchTasks] = useState<iTodo[]>(todos);

  useEffect(() => {
    setSearchTasks(todos)
  }, [todos]);

  const searchTask = (taskName: string) => {
    let todosFilter = searchTasks.filter((todo: iTodo) => 
      todo.title.toLowerCase().includes(taskName.toLowerCase()));
    return todosFilter;
  }

  const onSearch = (taskName: string | null) => {
    if (!taskName) {
      setSearchTasks(todos);
    }
    setNotFound(false);

    if (taskName) {
      const result: iTodo[] = searchTask(taskName);

      if (result.length === 0) {
        setNotFound(true);
      } else {
        setSearchTasks(result);
      }
    }    
  }

  return (
    <>
      <Head>
          <title>Lista de Tarefas</title>
      </Head>
      <div className={styles.container}>
        <Searchbar onSearch={onSearch} />
        <h1>Tarefas</h1>

        {notFound ? 
          <strong>Tarefa não encontrada!</strong>
        : (
          searchTasks.map((todo: iTodo) => (
            <Taskbox 
              key={todo.guid} 
              guid={todo.guid} 
              title={todo.title} 
              description={todo.description} 
              situation={todo.situation} 
            />
          ))
        )}
        <Link href="/createTask">
          <a className={styles.addButton} >
            <Image className={styles.icon} src="/plus.svg" alt="adicionar" width={24} height={24} />
            <p>Nova Tarefa</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
