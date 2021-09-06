import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

const Sidebar: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <Image src="/user.svg" alt="user avatar" width={41} height={41} />
                    <div className={styles.description}>
                        <h3>Gabriel</h3>
                        <p>Developer</p>
                    </div>
                </div>
                <div className={styles.divisor} />
                <nav>
                    <a>
                        <Image src="/list.svg" alt="lista de tarefas" width={24} height={24} />
                        <h3>Tarefas</h3>
                    </a>
                    <a>
                        <Image src="/info.svg" alt="informações" width={24} height={24} />
                        <h3>Sobre</h3>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;