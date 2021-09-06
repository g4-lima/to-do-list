import type { NextPage } from 'next';
import Head from 'next/head';
import Searchbar from '../components/Searchbar';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>Lista de Tarefas</title>
      </Head>
      <div className={styles.container}>
        <Searchbar/>
      </div>
    </>
  );
};

export default Home;
