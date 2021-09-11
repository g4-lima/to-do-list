import type { NextPage } from 'next';
import { useEffect } from 'react';
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

  return (
    <>
      <Head>
          <title>Lista de Tarefas</title>
      </Head>
      <div className={styles.container}>
        <Searchbar/>
        <h1>Tarefas</h1>
        {todos.map((todo: iTodo) => (
          <Taskbox 
            key={todo.guid} 
            guid={todo.guid} 
            title={todo.title} 
            description={todo.description} 
            situation={todo.situation} 
          />
        ))}
        <Link href="/createTask">
          <a className={styles.addButton} >
            <Image src="/plus.svg" alt="adicionar" width={24} height={24} />
            <p>Nova Tarefa</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
