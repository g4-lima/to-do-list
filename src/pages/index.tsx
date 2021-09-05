import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>Lista de Tarefas</title>
      </Head>

      <Sidebar />      
    </>
  );
};

export default Home;
