import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from '../components/Searchbar';
import Taskbox from '../components/Taskbox';
import { useSelector } from 'react-redux';

import styles from '../styles/home.module.scss';

interface iState {
  todos: [];
}

interface iTodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const Home: NextPage = () => {
  const todos = useSelector((state: iState) => state.todos);

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
            key={todo.id} 
            id={todo.id} 
            title={todo.title} 
            description={todo.description} 
            completed={todo.completed} 
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
