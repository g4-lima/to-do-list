import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CreateTaskMenu from '../components/CreateTaskMenu';
import Searchbar from '../components/Searchbar';
import Taskbox from '../components/Taskbox';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>Lista de Tarefas</title>
      </Head>
      <div className={styles.container}>
        <Searchbar/>
        <h1>Tarefas</h1>
        <Taskbox />
        <Taskbox />
        <Taskbox />
        <button className={styles.addButton}>
          <Image src="/plus.svg" alt="adicionar" width={24} height={24} />
          <p>Nova Tarefa</p>
        </button>
      </div>
      <CreateTaskMenu />
    </>
  );
};

export default Home;
