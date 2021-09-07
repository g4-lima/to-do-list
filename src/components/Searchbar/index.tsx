import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

const Searchbar: NextPage = () => {
    const searchImg = require('../../../public/search.svg');

    return (
        <>
        <div className="container">
            <input className={styles.search} placeholder={"Procurar tarefas"} type="text" />
            <Image className={styles.img} src="/search.svg" alt="Prucurar" width={21} height={40} />
        </div>
        </>
    );
};

export default Searchbar;