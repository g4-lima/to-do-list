import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

const Taskbox: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3>Nome</h3>
                <p>Descrição da tarefa</p>
                <button className={styles.statusButton}>Em progresso</button>
            </div>
            <a className={styles.optionsButton}>
                <Image src="/dots.svg" alt="Opções" width={24} height={24} />
            </a>
        </div>
    );
};

export default Taskbox;